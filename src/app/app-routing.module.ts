import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [{
  path: 'cliente', component: ClienteComponent
},{
  path: 'produto', component: ProdutosComponent
},{
  path: 'carrinho', component: CarrinhoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
