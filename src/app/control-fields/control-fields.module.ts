import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form008Component } from './form008/form008.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { Date0005Component } from './date0005/date0005.component';
import { TypeDateComponent } from './type-date/type-date.component';
import {MatSelectModule} from "@angular/material/select";
import { TableCodeComponent } from './table-code/table-code.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    Form008Component,
    Date0005Component,
    TypeDateComponent,
    TableCodeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule
  ],
  exports: [
        Form008Component
    ]
})
export class ControlFieldsModule { }
