import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConstants } from './core/router.constans';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
      path: RouterConstants.HOME,
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }
  ,{
    path: RouterConstants.HOME,
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
