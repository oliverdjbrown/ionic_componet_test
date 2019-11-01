import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FloatingbuttonPage } from './floatingbutton.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingbuttonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FloatingbuttonPage]
})
export class FloatingbuttonPageModule {}
