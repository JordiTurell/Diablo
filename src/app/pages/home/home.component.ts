import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  botones = [
    {
      name: 'Diablo 2',
      id: 'diablo2',
      hidden: false,
      x: 0,
      y: 66,
      hx: 0,
      hy: 0
    },
    {
      name: 'Diablo 3',
      id: 'diablo3',
      hidden: false,
      x: 0,
      y: 0,
      hx: 0,
      hy: 0
    },
    {
      name: 'Diablo 4',
      id: 'diablo4',
      hidden: false,
      x: 0,
      y: 0,
      hx: 0,
      hy: 0
    }
  ]
  
  constructor(private router:Router){
    
  }

  OverMouse(buton:any){
    let btn = document.getElementById(buton.id) as HTMLButtonElement
    btn.classList.remove('bg-1')
    btn.classList.add('bg-2')
  }

  OutMouse(buton:any){
    let btn = document.getElementById(buton.id) as HTMLButtonElement
    btn.classList.remove('bg-2')
    btn.classList.add('bg-1')
  }

  clickurl(buton:any){
    switch(buton.name){
      case 'Diablo 2':
        this.router.navigate(['/diablo2/home'])
        break;
      case 'Diablo 3':
        this.router.navigate(['/diablo3/home'])
        break;
      case 'Diablo 4':
        this.router.navigate(['/diablo4/home'])
        break;
    }
  }
}
