import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterConstants } from '../core/router.constans';
import { HomeComponent } from './home/home.component';
import { LoginStudentComponent } from './login-student/login-student.component'

const routes: Routes = [
    {
      path: RouterConstants.HOME,
      component: HomeComponent,
    },
    {
        path: RouterConstants.LOGIN,
        component: LoginStudentComponent,
    },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {
  }
  