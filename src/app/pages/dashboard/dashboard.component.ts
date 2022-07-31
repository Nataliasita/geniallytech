import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from 'src/app/core/router.constans';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  categories=[
    {   id:0,
        name:'Lógico matemático',
        image: './../../../assets/images/kids.jpg',
        description:'Estudia la inferencia mediante la construcción de sistemas formales como la lógica proposicional, la lógica de primer orden o la lógica modal, encontraras ejercicios, actividades y mucho mas...',
        sound:'',
    },
    {   id:1,
        name:'Bibliotecas lecto escritura',
        image: './../../../assets/images/kids.jpg',
        description:'Nos permite interpretar textos usando un alfabeto y plasmar el lenguaje, además de hacerlo permanente y accesible sin límites. tendras acceso a una collecion de libros digitales.',
        sound:'',
    },
    {   id:3,
        name:'No te limites',
        image: './../../../assets/images/kids.jpg',
        description:'Implica que participen plenamente en todos los sectores y a todos los niveles de la actividad económica para construir economías fuertes, establecer sociedades más estables y justas, alcanzar los objetivos de desarrollo.',
        sound:'',
    },
    {   id:4,
        name:'Mujeres Tech',
        image: './../../../assets/images/kids.jpg',
        description:'Al crear tecnología, las niñas aprenden a hablar y explicar su trabajo. necesitan tener seguridad y confianza. Además, al crear software se fomenta el pensamiento crítico, la creatividad y el desarrollo de pasos previos.',
        sound:'',
    }
  ]

  selectCategory(val:any){
    if(val == '1'){
      this.router.navigate([RouterConstants.LIBRARY])
    }
  }

}
