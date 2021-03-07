// MÓDULO PADRÃO PARA IMPORTAR TODOS OS COMPONENTES USADOS DO ANGULAR MATERIAL
// AQUI DEVE-SE CENTRALIZAR TUDO QUE É USADO DO ANGULAR MATERIAL

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatProgressBarModule

  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatProgressBarModule
  ]
})
export class CustomMaterialModule { }
