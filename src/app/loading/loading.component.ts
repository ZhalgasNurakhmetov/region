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
              private elmRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) {
}

ngAfterViewInit(): void {
  this.elmRef.nativeElement.style.display = 'none';
  this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
    (status: boolean) => {
      this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
      this.changeDetectorRef.detectChanges();
    }
  );
}

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
