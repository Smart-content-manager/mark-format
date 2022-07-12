import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";

export interface TypeOption {
  description: string;
  value: string;
  descriptionStart: string;
  descriptionEnd: string;
  typeDate: TypeDate;
}

export enum TypeDate {
  AFTER_AC,
  FINISH_PUBLISH,
  DETAILS,
  UNKNOWN,
  PROBABLE
}


@Component({
  selector: 'app-type-date',
  templateUrl: './type-date.component.html',
  styleUrls: ['./type-date.component.css']
})


export class TypeDateComponent implements OnInit {


  listTypeOptions: TypeOption[] = [
    {
      description: "Sin fechas o implica fechas a.C",
      value: "b",
      descriptionStart: "####",
      descriptionEnd: "####",
      typeDate: TypeDate.AFTER_AC
    },
    {
      description: "Recurso continuo que terminó su publicación",
      value: "d",
      descriptionStart: "la fecha de inicio de la publicación",
      descriptionEnd: "la fecha de términación de la publicación",
      typeDate: TypeDate.FINISH_PUBLISH
    },
    {
      description: "Fecha detallada",
      value: "e",
      descriptionStart: "contiene el año",
      descriptionEnd: "contiene el mes y día",
      typeDate: TypeDate.DETAILS
    },
    {
      description: "Fecha desconocida",
      value: "n",
      descriptionStart: "",
      descriptionEnd: "",
      typeDate: TypeDate.UNKNOWN
    },
    {
      description: "Fecha individual conocida o probable",
      value: "s",
      descriptionStart: "contiene la fecha",
      descriptionEnd: "####",
      typeDate: TypeDate.PROBABLE
    }
  ];

  @Output() typeOption = new EventEmitter<TypeDate>();
  typeOptionSelect = this.listTypeOptions[0].value;


  constructor() {
  }

  ngOnInit(): void {
    this.typeOption.emit(this.listTypeOptions[0].typeDate)
  }


  selectTypeDate(event: MatSelectChange) {
    const select = event.value
    const option = this.listTypeOptions.find((type) => type.value == select)
    if (option) this.typeOption.emit(option.typeDate)
  }
}
