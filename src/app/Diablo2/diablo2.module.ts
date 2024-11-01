import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BuildsComponent } from './pages/builds/builds.component';
import { RunasComponent } from './pages/runas/runas.component';
import { DatabaseComponent } from './pages/database/database.component';
import { CalculadoratcComponent } from './pages/calculadoratc/calculadoratc.component';
import { SantogrialComponent } from './pages/santogrial/santogrial.component';
import { Diablo2RoutingModule } from './diablo4-routing.module';


@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    LayoutComponent,
    BuildsComponent,
    RunasComponent,
    DatabaseComponent,
    CalculadoratcComponent,
    SantogrialComponent
  ],
  imports: [
    CommonModule,
    Diablo2RoutingModule
  ],
  exports: [ToolbarComponent]
})
export class Diablo2Module { }