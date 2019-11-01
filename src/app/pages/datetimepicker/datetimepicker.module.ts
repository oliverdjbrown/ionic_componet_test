import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatetimepickerPage } from './datetimepicker.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimepickerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatetimepickerPage]
})
export class DatetimepickerPageModule {}
