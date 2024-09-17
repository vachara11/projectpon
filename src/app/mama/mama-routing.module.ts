import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MamaPage } from './mama.page';

const routes: Routes = [
  {
    path: '',
    component: MamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MamaPageRoutingModule {}
