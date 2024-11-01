import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-runas',
  templateUrl: './runas.component.html',
  styleUrls: ['./runas.component.scss']
})
export class RunasComponent implements OnInit {

  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable('Runas')
  }
}
