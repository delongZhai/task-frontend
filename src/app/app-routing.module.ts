import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LowComponent } from './low/low.component';
import { MediumComponent } from './medium/medium.component';
import { HighComponent } from './high/high.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full' //, 
    // children: [
    //   {path: 'low', component: LowComponent},
    //   {path: 'medium', component: MediumComponent},
    //   {path: 'high', component: HighComponent}
    // ]
  },
  {
    path: 'low', component: LowComponent
  },
  {
    path: 'medium', component: MediumComponent
  },
  {
    path: 'high', component: HighComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
