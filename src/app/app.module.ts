import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './component/orders.component';

import { OrderService } from './service/order.service';
import { OrderDescriptionPipe } from './component/order-description.filter';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent,
        OrderDescriptionPipe
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
