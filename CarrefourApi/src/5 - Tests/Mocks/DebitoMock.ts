import { Debito } from "@aggregates/Caixa/Debito/Debito";

export class DebitoMock
{
   public debito = new Debito();


   ObterDebito()
   {
       this.debito.debitoId = 1;
       this.debito.nome = "Teste";
       this.debito.valor = 1200;
       this.debito.data = new Date();
       this.debito.tipoId = 1;
       return this.debito;
   }

}

