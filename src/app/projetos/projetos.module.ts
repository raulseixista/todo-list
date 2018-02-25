import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { ProjetosDetalheComponent } from './projetos-detalhe/projetos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjetosComponent,
    ProjetosDetalheComponent
  ],
  exports: [
    ProjetosComponent
  ]
})
export class ProjetosModule { }
