import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrdersComponent } from './component/orders.component';
import { EditOrderComponent } from './component/edit-order.component';
import { CreateOrderComponent } from './component/create-order.component';

import { OrderService } from './service/order.service';
import { OrderDescriptionPipe } from './component/order-description.filter';
import { RouterModule }   from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent,
        EditOrderComponent,
        CreateOrderComponent,
        OrderDescriptionPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        OrderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
