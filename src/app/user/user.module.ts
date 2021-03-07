import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../shared/material.module';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { NgxMaskModule } from 'ngx-mask';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';

@NgModule({
  declarations: [ListagemUsuarioComponent, DetalhesUsuarioComponent, EditarUsuarioComponent, CriarUsuarioComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    NgxMaskModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
