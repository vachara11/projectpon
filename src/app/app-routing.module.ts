import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'prouct',
    loadChildren: () => import('./prouct/prouct.module').then( m => m.ProuctPageModule)
  },
  {
    path: 'candy',
    loadChildren: () => import('./candy/candy.module').then( m => m.CandyPageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },

  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'mama',
    loadChildren: () => import('./mama/mama.module').then( m => m.MamaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
