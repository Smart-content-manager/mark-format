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



@NgModule({
  declarations: [
    Form008Component,
    Date0005Component
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [
        Form008Component
    ]
})
export class ControlFieldsModule { }
