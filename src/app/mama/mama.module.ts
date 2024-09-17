import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MamaPageRoutingModule } from './mama-routing.module';
import { MamaPage } from './mama.page'; // Import MamaPage ให้ถูกต้อง

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MamaPageRoutingModule
  ],
  declarations: [MamaPage] // แก้เป็น MamaPage
})
export class MamaPageModule {}
