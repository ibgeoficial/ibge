import { Component, OnInit } from '@angular/core';

import { CalendarioService, Divulgacao, DivulgacoesPaginadas } from '@ibge/calendario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  divulgacoes: Divulgacao[];

  constructor(
    private _calendarioServ: CalendarioService
  ) {}

  ngOnInit(): void {
    this._calendarioServ.getDivulgacoes({
      qtd: 10,
      de: '2017-05-01',
      ate: '2017-06-08'
    }).subscribe((divulgacoesPaginadas: DivulgacoesPaginadas) => {
      this.divulgacoes = divulgacoesPaginadas.items;
    })
  }
}
