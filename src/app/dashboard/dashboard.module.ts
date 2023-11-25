import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DevicesComponent } from './devices/devices.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class DashboardModule { }
