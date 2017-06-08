import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Divulgacao } from './calendario.model';
import { CalendarioService } from './calendario.service';

export * from './calendario.model';
export * from './calendario.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ]
})
export class CalendarioModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CalendarioModule,
      providers: [CalendarioService]
    };
  }
}
