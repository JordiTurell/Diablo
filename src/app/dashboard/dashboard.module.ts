import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashHomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashLoginComponent } from './pages/login/login.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    DashHomeComponent,
    LayoutComponent,
    DashLoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
],
  exports: [ToolbarComponent]
})
export class DashboardModule { }