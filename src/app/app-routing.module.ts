import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parte2Component } from './parte2/parte2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'parte2', component: Parte2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
