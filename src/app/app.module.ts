import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    StartComponent,
    OrderDetailsComponent,
    ConfigurationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMqkcDsOHdSHcCvxtFXCPnd2ITgdNANmw'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
