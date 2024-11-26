import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashHomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashLoginComponent } from './pages/login/login.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModalErrorComponent } from './components/modals/modal-error/modal-error.component';
import { ModalSuccessComponent } from './components/modals/modal-success/modal-success.component';
import { ButtonComponent } from './components/generic-components/forms/button/button.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    DashHomeComponent,
    LayoutComponent,
    DashLoginComponent,
    ModalErrorComponent,
    ModalSuccessComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
],
  exports: [ToolbarComponent]
})
export class DashboardModule { }