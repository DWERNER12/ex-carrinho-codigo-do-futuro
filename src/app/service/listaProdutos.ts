import { Produto } from "../interface/produto";

export class ListaProdutos {

    static buscaClientePorId(id: Number): Produto {
        let produto:Produto  = {} as Produto 

        for(let i=0; i<ListaProdutos.produtos.length; i++){
            let produtosDb = ListaProdutos.produtos[i]
            if(produtosDb.id == id){
                produto = produtosDb
                break
            }
        }

        return produto;
    }

    private static produtos: Produto [] = [
        {
            id: 1,
            nome: "Chocolate Branco",
            descricao: "Doce",
            preco: 20
        },{
            id: 2,
            nome: "Chocolate",
            descricao: "Doce",
            preco: 20
        }
    ]

    public static buscaProdutos():Produto []{
        return ListaProdutos.produtos
    }

   

   
   
}