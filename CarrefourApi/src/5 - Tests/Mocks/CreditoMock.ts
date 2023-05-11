import { Credito } from "@aggregates/Caixa/Credito/Credito";

export class CreditoMock
{
   public credito = new Credito();


   ObterCredito()
   {
       this.credito.creditoId = 1;
       this.credito.nome = "Teste";
       this.credito.valor = 1200;
       this.credito.data = new Date();
       this.credito.tipoId = 6
       return this.credito;
   }

}

