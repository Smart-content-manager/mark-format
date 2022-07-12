import {Component, OnInit} from '@angular/core';
import {TypeDate} from "../type-date/type-date.component";

@Component({
  selector: 'app-form008',
  templateUrl: './form008.component.html',
  styleUrls: ['./form008.component.css']
})
export class Form008Component implements OnInit {

  typeDate: TypeDate = TypeDate.AFTER_AC

  constructor() {
  }

  ngOnInit(): void {
  }

  changeTypeDate(type: TypeDate) {
    this.typeDate = type;
  }

}
