import { LoadingComponent } from './loading/loading.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { StartComponent } from './start/start.component';
import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'response', component: OrderComponent},
  {path: 'order', component: OrderDetailsComponent},
  // {path: 'load', component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
