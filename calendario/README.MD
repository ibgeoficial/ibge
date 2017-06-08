# Calendário

## Instalação

Para instalar a biblioteca, rode:

```bash
$ npm install @ibge/calendario --save
```

## Usando a biblioteca

Após instalar a biblioteca, você deve importar o `CalendarioModule` no seu `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulo do Calendário
import { CalendarioModule } from '@ibge/calendario';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Adicionar o CalendarioModule no AppModule, caso seja em um módulo interno basta importar como CalendarioModule
    CalendarioModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Uma vez importado, é possível consumir os serviços do calendário, recebendo a informação segundo a api de calendário `http://servicodados.ibge.gov.br/api/docs/calendario`

```typescript
// Importar o serviço e interfaces, se necessário
import { CalendarioService, Divulgacao, DivulgacoesPaginadas } from '@ibge/calendario';

// ...

  constructor(
    // Injetar o serviço no construtor do componente
    private _calendarioServ: CalendarioService
  ) {}

  ngOnInit(): void {
    // Chamar os métodos disponíveis
    this._calendarioServ.getDivulgacoes({
      qtd: 10,
      de: '2017-05-01',
      ate: '2017-06-08'
    }).subscribe((divulgacoesPaginadas: DivulgacoesPaginadas) => {
      // Utilizar as divulgacoesPaginadas aqui
    })
  }
```

## Desenvolvimento

Esse componente utilizou o generator do yeoman `https://github.com/jvandemo/generator-angular2-library`, os comandos utilizados podem ser encontrados na documentação

## Licença

MIT
