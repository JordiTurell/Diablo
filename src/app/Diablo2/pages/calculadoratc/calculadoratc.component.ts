import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-calculadoratc',
  templateUrl: './calculadoratc.component.html',
  styleUrls: ['./calculadoratc.component.scss']
})
export class CalculadoratcComponent implements OnInit {
  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable('Calculadora')
  }
}
