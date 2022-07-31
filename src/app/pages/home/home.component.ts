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
      {link:"./assets/images/ninnos.png", principal: false, nombre:"emeplo02" },
      {link:"./assets/images/Computer-Donation.png", principal: false, nombre:"emeplo03" }
    ]
  }

}
