import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashHomeComponent } from './pages/home/home.component';
import { DashLoginComponent } from './pages/login/login.component';
import { AuthGuard } from '../guard/auth-guard.guard';

const routes: Routes = [
    { path: "dashboard/login", component: DashLoginComponent },
    { path: "dashboard", canActivate: [AuthGuard], component: LayoutComponent, children:[
        { path: "home", component: DashHomeComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }