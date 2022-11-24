import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ListaClientes } from 'src/app/service/listaClientes';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
cliente: any;

  constructor() { }

  ngOnInit(): void {
  }

  
  public clientes:Cliente[] = ListaClientes.buscaClientes()

}
