import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

import { BuildsComponent } from './pages/builds/builds.component';
import { RunasComponent } from './pages/runas/runas.component';
import { DatabaseComponent } from './pages/database/database.component';
import { CalculadoratcComponent } from './pages/calculadoratc/calculadoratc.component';
import { SantogrialComponent } from './pages/santogrial/santogrial.component';

const routes: Routes = [
    { path: "diablo2", component: LayoutComponent, children:[
        { path: "", redirectTo: "home", pathMatch: "full" }, 
        { path: "home", component: HomeComponent },
        { path: "builds", component: BuildsComponent },
        { path: "runas", component: RunasComponent },
        { path: "database", component: DatabaseComponent },
        { path: "calculadoraTC", component: CalculadoratcComponent },
        { path: "santogrial", component: SantogrialComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Diablo2RoutingModule { }