import { Produto } from "src/app/interface/produto"


export class Pedido{
    public id:Number = 0
    public idCliente:Number = 0
    public data:Date = new Date()
    public itens:Produto[] = []

    public valorTotal():Number{
        // calcular o valor dos this.itens
        if(this.itens.length > 0){
            for(let i = 0; i<this.itens.length; i++){
                 this.itens.length ++ 
            }
        }
        return this.valorTotal();
    }


}