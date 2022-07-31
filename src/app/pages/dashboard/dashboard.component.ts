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
        name:'Logica y matematicas',
        image: './../../../assets/images/kids.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua. ',
        sound:'',
    },
    {   id:1,
        name:'Biblioteca',
        image: './../../../assets/images/kids.jpg',
        description:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        sound:'',
    },
    {   id:3,
        name:'No te limites',
        image: './../../../assets/images/kids.jpg',
        description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        sound:'',
    },
    {   id:4,
        name:'Mujeres en tecnologia',
        image: './../../../assets/images/kids.jpg',
        description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        sound:'',
    }
  ]

  selectCategory(val:any){
    if(val == '1'){
      this.router.navigate([RouterConstants.LIBRARY])
    }
  }

}
