import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ListaProdutos } from 'src/app/service/listaProdutos';
import { PedidoServico } from 'src/app/service/pedidoServico';



@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  public produtos:Produto[] = ListaProdutos.buscaProdutos()

  

}
