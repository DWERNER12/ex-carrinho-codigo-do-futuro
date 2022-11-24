import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ListaProdutos } from 'src/app/service/listaProdutos';
import { PedidoServico } from 'src/app/service/pedidoServico';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private carrinhoService:CarrinhoService) { }

  ngOnInit(): void {
  }

  public produtos:Produto[] = ListaProdutos.buscaProdutos()

  addCarrinho(produto:Produto){
    PedidoServico.get().idCliente = 1
    PedidoServico.get().itens.push(produto)
    this.carrinhoService.atualizaCarrinho()
  }

}
