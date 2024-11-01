import { Component } from '@angular/core';
import { TitleService as TitleServiceDiablo4 } from '../../service/title.service';

@Component({
  selector: 'd4-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  titulo:string = ''

  constructor(private titleservice:TitleServiceDiablo4){

  }

  ngOnInit(): void {
    this.titleservice.TituloSubject$.subscribe((value) =>{
      this.titulo = value
    })
  }
}
