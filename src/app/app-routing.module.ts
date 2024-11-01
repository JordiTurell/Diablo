import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'diablo4',
    loadChildren: () => import('./Diablo4/diablo4.module').then(m => m.Diablo4Module)
  },
  {
    path: 'diablo2',
    loadChildren: () => import('./Diablo2/diablo2.module').then(m => m.Diablo2Module)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
