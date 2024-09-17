import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProuctPageRoutingModule } from './prouct-routing.module';

import { ProuctPage } from './prouct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProuctPageRoutingModule
  ],
  declarations: [ProuctPage]
})
export class ProuctPageModule {}
