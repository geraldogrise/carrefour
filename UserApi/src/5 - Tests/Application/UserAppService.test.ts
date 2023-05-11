
import {describe, expect} from '@jest/globals';
import { UserRepository } from '@repository/UserRepository';
import { UserService } from '@aggregates/Users/User/Services/UserService';
import { UserMock } from '../Mocks/UserMock';
import { UserAppService } from '@apps/UserAppService';


describe("user app serviuce", () => {
    const _repository: UserRepository = new UserRepository();
    const _service: UserService = new UserService(_repository);
    const _appService: UserAppService = new UserAppService(_service);
    
    it('criar user', async () => {
        const user = new UserMock().ObterUsuario();
        const userInserted = _appService.InsertUser(user);
        console.log(userInserted);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });
    it('atualizar user', async () => {
        const user = new UserMock().ObterUsuario();
        const userYUpdated = _appService.UpdateUser(user);
        console.log(userYUpdated);
        expect(user.userId).toBe(1);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });
    it('Deletar user', async () => {
        const user = new UserMock().ObterUsuario();
        const userDeleted = _appService.DeleteUser(user.userId);
        console.log(userDeleted);
        expect(user.userId).toBe(1);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });

    it('Obter user', async () => {
        const user = new UserMock().ObterUsuario();
        const userDeleted = _appService.GetById(user.userId);
        console.log(userDeleted);
        expect(user.userId).toBe(1);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });

    it('Obter toso os users', async () => {
        const user = new UserMock().ObterUsuario();
        const userDeleted = _appService.GetAll();
        console.log(userDeleted);
        expect(user.userId).toBe(1);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });
  

});

