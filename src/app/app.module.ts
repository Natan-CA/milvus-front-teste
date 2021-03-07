import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { CustomMaterialModule } from './shared/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ApiEExemplosComponent } from './api-e-exemplos/api-e-exemplos.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
registerLocaleData(localept, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ApiEExemplosComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    CustomMaterialModule,
    NavigationModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
