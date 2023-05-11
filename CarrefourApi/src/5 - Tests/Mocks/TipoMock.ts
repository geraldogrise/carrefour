import { Tipo } from "@aggregates/Caixa/Tipo/Tipo";

export class TipoMock
{
   public tipo = new Tipo();


   ObterTipo()
   {
       this.tipo.tipoId = 1;
       this.tipo.nome = "Teste";
       return this.tipo;
   }

}

