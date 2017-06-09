# Noticias

## Instalação

Para instalar a biblioteca, rode:

```bash
$ npm install @ibge/noticias --save
```

## Usando a biblioteca

Após instalar a biblioteca, você deve importar o `NoticiasModule` no seu `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulo de Notícias
import { NoticiasModule } from '@ibge/noticias';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Adicionar o NoticiasModule no AppModule, caso seja em um módulo interno basta importar como NoticiasModule
    NoticiasModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Uma vez importado, é possível consumir os serviços do calendário, recebendo a informação segundo a api de calendário `http://servicodados.ibge.gov.br/api/docs/noticias`

```typescript
// Importar o serviço e interfaces, se necessário
import { NoticiasService, Noticia, NoticiasPaginadas } from '@ibge/noticias';

// ...

  constructor(
    // Injetar o serviço no construtor do componente
    private _noticiasServ: NoticiasService
  ) {}

  ngOnInit(): void {
    // Chamar os métodos disponíveis
    this._noticiasServ.get({
      qtd: 10
    }).subscribe((noticiasPaginadas: NoticiasPaginadas) => {
      // Utilizar as noticiasPaginadas aqui
    })
  }
```

## Desenvolvimento

Esse componente utilizou o generator do yeoman `https://github.com/jvandemo/generator-angular2-library`, os comandos utilizados podem ser encontrados na documentação

## Licença

MIT
