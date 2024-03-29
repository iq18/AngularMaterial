import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent, CustomerNewComponent, RepDialogComponent],
  entryComponents: [RepDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatDialogModule,
    MatRadioModule
  ]
})
export class CustomersModule { }
