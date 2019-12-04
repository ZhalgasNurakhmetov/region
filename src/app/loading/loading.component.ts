import { LoadingServiceService } from '../services/loading-service.service';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit, OnDestroy {

  debounceTime = 300;
  loading = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingServiceService,
              private _elmRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
}

ngAfterViewInit(): void {
  this._elmRef.nativeElement.style.display = 'none';
  this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
    (status: boolean) => {
      this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
      this._changeDetectorRef.detectChanges();
    }
  );
}

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
