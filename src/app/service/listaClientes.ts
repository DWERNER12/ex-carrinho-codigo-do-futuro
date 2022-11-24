import { Cliente } from "../interface/cliente";

export class ListaClientes{

    static buscaClientePorId(id: Number): Cliente {
        let cliente:Cliente = {} as Cliente

        for(let i=0; i<ListaClientes.clientes.length; i++){
            let clienteDb = ListaClientes.clientes[i]
            if(clienteDb.id == id){
                cliente = clienteDb
                break
            }
        }

        return cliente;
    }

    private static clientes: Cliente[] = [
        {
            id: 1,
            nome: "Luana",
            telefone: 1212111-1111,
            endereco: "Rua teste",
            cpf: "333.222.222-33"
        },{
            id: 2,
            nome: "Marcia",
            telefone: 121211-1112,
            endereco: "Rua teste dois",
            cpf: "333.222.222-22"
        }
    ]

    public static buscaClientes():Cliente[]{
        return ListaClientes.clientes
    }

   

   
   
}