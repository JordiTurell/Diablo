import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { Diablo4RoutingModule } from './diablo4-routing.module';
import { BuildsComponent } from './pages/builds/builds.component';
import { SelectPjComponent } from './components/select-pj/select-pj.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    LayoutComponent,
    BuildsComponent,
    SelectPjComponent
  ],
  imports: [
    CommonModule,
    Diablo4RoutingModule
],
  exports: [ToolbarComponent]
})
export class Diablo4Module { }