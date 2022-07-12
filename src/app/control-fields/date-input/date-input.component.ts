import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TypeDate} from "../type-date/type-date.component";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit, OnChanges {

  value = '';
  label = '';
  disable=false;
  placeHolder="";

  @Input() position: number = 1;
  @Input() typeDate: TypeDate = TypeDate.AFTER_AC
  @Input() title: string="";

  constructor() {
    this.computerValue(this.typeDate)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.computerValue(changes['typeDate'].currentValue)
  }

  ngOnInit(): void {
  }

  computerValue(type: TypeDate) {
    switch (type) {
      case TypeDate.AFTER_AC:
        this.value="####"
        this.label="Sin fecha"
        this.disable = true;
        break;
      case TypeDate.FINISH_PUBLISH:
        this.disable = false;
        this.placeHolder="yyyy"
        this.value=""
        if(this.position==1){
          this.label="Fecha de inicio de la publicacion"
        }else{
          this.label="Fecha de fin de la publicación"
        }
        break;
      case TypeDate.DETAILS:
        this.disable = false;
        this.value=""
        if(this.position==1){
          this.placeHolder="yyyy"
          this.label="Año de la publicacion"
        }else{
          this.placeHolder="mmdd"
          this.label="Dia y mes de la publicación"
        }
        break;
      case TypeDate.UNKNOWN:
        this.disable = true;
        this.value="uuuu"
        break;
      case TypeDate.PROBABLE:
        if(this.position==1){
          this.disable = false;
          this.label="Fecha conocida"
          this.placeHolder="yyyy"
          this.value=""
        }else{
          this.disable = true;
          this.label="Sin datos"
          this.value="####"
        }
        break;
    }
  }
}
