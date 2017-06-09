import { Component, OnInit } from '@angular/core';

import { CalendarioService, Divulgacao, DivulgacoesPaginadas } from '@ibge/calendario';
import { NoticiasService, Noticia, NoticiasPaginadas } from '@ibge/noticias';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  divulgacoes: Divulgacao[];

  noticias: Noticia[];

  constructor(
    private _calendarioServ: CalendarioService,
    private _noticiasServ: NoticiasService
  ) {}

  ngOnInit(): void {
    this._calendarioServ.getDivulgacoes({
      qtd: 10,
      de: '2017-05-01',
      ate: '2017-06-08'
    }).subscribe((divulgacoesPaginadas: DivulgacoesPaginadas) => {
      this.divulgacoes = divulgacoesPaginadas.items;
    });

    this._noticiasServ.get({
      qtd: 10,
      tipo: 'release',
      de: '2017-05-01',
      ate: '2017-06-08'
    }).subscribe((noticiasPaginadas: NoticiasPaginadas) => {
      this.noticias = noticiasPaginadas.items;
    });
  }
}
