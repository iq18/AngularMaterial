import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatCardModule, MatDatepickerModule,
    MatIconModule, MatTabsModule,
    MatInputModule, MatMomentDateModule,
    MatTableModule, MatSortModule,
    MatCheckboxModule,


  ]
})
export class OrdersModule { }
