import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent implements OnInit {
  contain_login:boolean = true;
  contain_register:boolean=false;
  public formLogin!:FormGroup;
  public formRegister!: FormGroup;

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.validation();
  }

  sendUser(){

  }
  registration(){
    this.contain_login=false;
    this.contain_register=true;
  }
  returnLogin(){
    this.contain_login=true;
    this.contain_register=false;
  }

  registerUser(){

  }

  validation(){
    this.formLogin = this.fb.group({
      email:['user-demo@gmail.com',
      [
        Validators.required,
        Validators.email,
      ],
    ],
      password:['123456',
      [
        Validators.required,
        Validators.minLength(6),
      ]
      ],
    });
    this.formRegister =this.fb.group({
      name_user_new:['',
      [
        Validators.required,
        Validators.minLength(6),
      ],
    ],
      email_new:['',
      [
        Validators.required,
        Validators.email
      ],
    ],
      password_new:['',
      [
        Validators.required,
        Validators.minLength(6),
      ]
      ],

    })

  }

}
