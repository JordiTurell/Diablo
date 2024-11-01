import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable(' Base de datos')
  }
}
