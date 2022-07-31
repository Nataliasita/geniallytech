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
      {link:"https://media.istockphoto.com/photos/happy-diverse-millennial-workmates-giving-high-five-celebrating-picture-id1134312232?k=20&m=1134312232&s=612x612&w=0&h=PRQ2dvvsMC4c6jFgazXXgCNQJQ5AKaZeGh2YFoMS0vU=", principal: true, nombre:"emeplo01" },
      {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRV6m1kjFAYoWQSy7kIb0141wiZ_TmfaRCxLt4Wt2QFRs9w4Q89tdxtwSsLi9jCgHx9Hk&usqp=CAU", principal: false, nombre:"emeplo02" },
      {link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8CWYzhCuy6FNxHrIKOuWnZIKwCa-qYmeLg&usqp=CAU", principal: false, nombre:"emeplo03" }
    ]
  }

}
