import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Divulgacao, DivulgacoesPaginadas } from './';

@Injectable()
export class CalendarioService {

  private _headers: Headers;

  constructor(
    private _http: Http
  ) {
    this._headers = new Headers();
    this._headers.append('Accept', 'application/json; charset=utf-8');
  }

  public getDivulgacoes(query: { qtd?: number, de?: string, ate?: string }): Observable<DivulgacoesPaginadas> {
    let params = new URLSearchParams();

    if(query.qtd) { params.append('qtd', query.qtd.toString()); }
    if(query.de)  { params.append('de',  query.de.toString());  }
    if(query.ate) { params.append('ate', query.ate.toString()); }

    let options = new RequestOptions({
      headers: this._headers,
      search: params
    });

    return this._http.get(
        `http://servicodados.ibge.gov.br/api/v3/calendario`,
        options
      )
      .map(res => {
        return <DivulgacoesPaginadas>res.json();
      });
  }

  public getDivulgacoesPorPesquisa(pesquisa:string, query: { qtd?: number, de?: string, ate?: string }): Observable<DivulgacoesPaginadas> {
    let params = new URLSearchParams();

    if(query.qtd) { params.append('qtd', query.qtd.toString()); }
    if(query.de)  { params.append('de',  query.de.toString());  }
    if(query.ate) { params.append('ate', query.ate.toString()); }

    let options = new RequestOptions({
      headers: this._headers,
      search: params
    });

    return this._http.get(
        `http://servicodados.ibge.gov.br/api/v3/calendario/${pesquisa}`,
        options
      )
      .map(res => {
        return <DivulgacoesPaginadas>res.json();
      });
  }
}
