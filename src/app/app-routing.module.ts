import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalamanAPIComponent } from './halaman-api/halaman-api.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },{
    path: 'halaman-api',
    component: HalamanAPIComponent,
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
