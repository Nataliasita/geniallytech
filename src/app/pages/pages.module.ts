import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { LoginStudentComponent } from './login-student/login-student.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginStudentComponent,
    ],
    imports: [
      CommonModule,
      PagesRoutingModule,
      SharedModule, 
      ComponentsModule
    ]
  })
  export class PagesModule { }
  