import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.scss']
})
export class BuildsComponent implements OnInit {

  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable('Builds')
  }
}
