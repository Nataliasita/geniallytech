import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ],
  exports: [ ]
})
export class SharedModule { }