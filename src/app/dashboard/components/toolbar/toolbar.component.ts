import { Component } from '@angular/core';

@Component({
  selector: 'd4-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showprofile:boolean = false
  shownotifications:boolean = false

  showMenuUser(){
    if(this.shownotifications){
      this.showNotifications()
    }
    this.showprofile = !this.showprofile
  }

  showNotifications(){
    if(this.showprofile){
      this.showMenuUser()
    }
    this.shownotifications = !this.shownotifications
  }
}
