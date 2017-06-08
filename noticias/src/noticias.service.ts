import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Noticia, NoticiasPaginadas } from './';

@Injectable()
export class NoticiasService {

  private _headers: Headers;

  constructor(
    private _http: Http
  ) {
    this._headers = new Headers();
    this._headers.append('Accept', 'application/json; charset=utf-8');
  }

  public get(query: {
    tipo?: string,
    qtd?: number,
    page?: number,
    de?: string,
    ate?: string,
    introsize?: number,
    destaque?: number,
    busca?: string
  }): Observable<NoticiasPaginadas> {
    let params = new URLSearchParams();
    
    if(query.tipo)      { params.append('tipo',      query.tipo.toString());      }
    if(query.qtd)       { params.append('qtd',       query.qtd.toString());       }
    if(query.page)      { params.append('page',      query.page.toString());      }
    if(query.de)        { params.append('de',        query.de.toString());        }
    if(query.ate)       { params.append('ate',       query.ate.toString());       }
    if(query.introsize) { params.append('introsize', query.introsize.toString()); }
    if(query.destaque)  { params.append('destaque',  query.destaque.toString());  }
    if(query.busca)     { params.append('busca',     query.busca.toString());     }

    let options = new RequestOptions({
      headers: this._headers,
      search: params
    });

    return this._http.get(
      `http://servicodados.ibge.gov.br/api/v3/noticias`,
      options
    )
    .map(res => {
      return <NoticiasPaginadas>res.json();
    });
  }

}
