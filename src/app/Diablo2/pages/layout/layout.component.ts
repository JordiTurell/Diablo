import { Component } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  titulo:string = ''

  constructor(private titleservice:TitleService){

  }

  ngOnInit(): void {
    this.titleservice.TituloSubject$.subscribe((value) =>{
      this.titulo = value
    })
  }
}
