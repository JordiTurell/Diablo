import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BuildsComponent } from './pages/builds/builds.component';

const routes: Routes = [
    { path: "diablo4", component: LayoutComponent, children:[
        { path: "", redirectTo: "home", pathMatch: "full" }, 
        { path: "home", component: HomeComponent },
        { path: "builds", component: BuildsComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Diablo4RoutingModule { }