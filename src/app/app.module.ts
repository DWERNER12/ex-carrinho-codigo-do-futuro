import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './components/hearder/hearder.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    CarrinhoComponent,
    ClienteComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
