import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import dateFormat from "dateformat";

@Component({
  selector: 'app-date0005',
  templateUrl: './date0005.component.html',
  styleUrls: ['./date0005.component.css']
})
export class Date0005Component implements OnInit {

  valueDate: string="";

  constructor() { }

  ngOnInit(): void {
  }

  addEvent( event: MatDatepickerInputEvent<any>) {
    this.valueDate=dateFormat(event.value, "yymmdd");
  }

}
