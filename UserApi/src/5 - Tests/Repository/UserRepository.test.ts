
import {describe, expect} from '@jest/globals';
import { UserRepository } from '@repository/UserRepository';
import { UserMock } from '../Mocks/UserMock';


describe("user repository", () => {
    const _repository: UserRepository = new UserRepository();
    
    it('criar user', async () => {
        const user = new UserMock().ObterUsuario();
        const userInserted = _repository.Insert(user);
        console.log(userInserted);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });
    it('atualizar user', async () => {
        const user = new UserMock().ObterUsuario();
        const userYUpdated = _repository.Update(user);
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
        const userDeleted = _repository.Delete(user.userId);
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
        const userDeleted = _repository.GetById(user.userId);
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
        const userDeleted = _repository.GetAll();
        console.log(userDeleted);
        expect(user.userId).toBe(1);
        expect(user.nome).toBe("Teste");
        expect(user.email).toBe("teste@teste.com");
        expect(user.login).toBe("teste");
        expect(user.senha).toBe("teste");
        expect(user.ativo).toBe(true);
    });
  

});

