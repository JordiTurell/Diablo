import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-santogrial',
  templateUrl: './santogrial.component.html',
  styleUrls: ['./santogrial.component.scss']
})
export class SantogrialComponent implements OnInit {
  
  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable('Santo grial')
  }
}
