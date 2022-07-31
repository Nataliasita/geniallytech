import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagesaAvatar = [
    {
      src: './../../../assets/images/female1.svg',
    },
    {
      src: './../../../assets/images/female3.svg',
    },
    {
      src: './../../../assets/images/female4.svg',
    },
    {
      src: './../../../assets/images/female5.svg',
    },
    {
      src: './../../../assets/images/female6.svg',
    },
    {
      src: './../../../assets/images/female7.svg',
    },
    {
      src: './../../../assets/images/female8.svg',
    },
    {
      src: './../../../assets/images/female10.svg',
    },
    {
      src: './../../../assets/images/male2.svg',
    },
    {
      src: './../../../assets/images/male3.svg',
    },
    {
      src: './../../../assets/images/male5.svg',
    },
    {
      src: './../../../assets/images/male6.svg',
    },
    {
      src: './../../../assets/images/male8.svg',
    },
    {
      src: './../../../assets/images/male9.svg',
    },
  ]

}
