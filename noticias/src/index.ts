import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { NoticiasService } from './noticias.service';
import { Noticia, NoticiasPaginadas } from './noticias.model';

export * from './noticias.service';
export * from './noticias.model';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  exports: []
})
export class NoticiasModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NoticiasModule,
      providers: [NoticiasService]
    };
  }
}
