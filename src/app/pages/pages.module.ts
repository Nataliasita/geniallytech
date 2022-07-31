import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { LoginStudentComponent } from './login-student/login-student.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibraryCatalogueComponent } from './library-catalogue/library-catalogue.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginStudentComponent,
        DashboardComponent,
        LibraryCatalogueComponent,
    ],
    imports: [
      CommonModule,
      PagesRoutingModule,
      SharedModule, 
      ComponentsModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class PagesModule { }
  