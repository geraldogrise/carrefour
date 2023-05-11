import { User } from "@aggregates/Users/User/User";

export class UserMock
{
   public user = new User();


   ObterUsuario()
   {
       this.user.userId = 1;
       this.user.nome = "Teste";
       this.user.email = "teste@teste.com";
       this.user.login = "teste";
       this.user.senha = "teste";
       this.user.ativo = true;

       return this.user;
   }

}

