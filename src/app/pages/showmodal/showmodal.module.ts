import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowmodalPage } from './showmodal.page';
import { ModalPageModule } from '../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: ShowmodalPage
  }
];

@NgModule({
  imports: [
    ModalPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowmodalPage]
})
export class ShowmodalPageModule {}
