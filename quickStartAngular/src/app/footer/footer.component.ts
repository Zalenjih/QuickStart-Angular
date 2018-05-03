import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title: string = "Mis cursos";
  cursos: string[] = ['JavaSE', 'Angular', 'SQL'];
  miCurso = this.cursos[1];
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

  misCursos: Array<any> = [
    { nombre: "JavaSE", tipo: "Back-End", precio: 300 },
    { nombre: "JavaEE", tipo: "Full-Stack", precio: 500 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "Angular", tipo: "Front-End", precio: 450 },
    { nombre: "SQL SEVER", tipo: "Back-End", precio: 220 }
  ];

  constructor() { }

  ngOnInit() {
  }


}
