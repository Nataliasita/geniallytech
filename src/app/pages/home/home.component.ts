import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public arrayImg: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.arrayImg=[
      {link:"./assets/images/voluntario.png", principal: true, nombre:"emeplo01" },
      {link:"https://img.freepik.com/foto-gratis/iconos-espacio-exterior-dibujo-concepto-graficos_53876-167098.jpg?w=740&t=st=1659236631~exp=1659237231~hmac=9bf610f4dd0b3258656f82e8d32dcb23907a5f1ffdfac2f6494f92f21274e0b4", principal: false, nombre:"emeplo02" },
      {link:"https://img.freepik.com/foto-gratis/ninos-divirtiendose-juegos-tradicionales_23-2149317168.jpg?w=826&t=st=1659236687~exp=1659237287~hmac=bf4bc1846effcabada7515e896b7d6574ed4b89ec04577e024d69293dafa74e9", principal: false, nombre:"emeplo03" }
    ]
  }

}
