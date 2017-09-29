import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './component/orders.component';

import { OrderService } from './service/order.service';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [OrderService],
    bootstrap: [AppComponent]
})
export class AppModule {}
