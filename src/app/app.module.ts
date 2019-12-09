import { LoadingServiceService } from './services/loading-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { StartComponent } from './start/start.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingScreenInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    StartComponent,
    OrderDetailsComponent,
    LoadingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    LoadingServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
