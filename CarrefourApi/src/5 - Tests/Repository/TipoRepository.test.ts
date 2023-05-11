
import {describe, expect} from '@jest/globals';
import { TipoRepository } from '@repository/TipoRepository';
import { TipoMock } from '../Mocks/TipoMock';


describe("user repository", () => {
    const _repository: TipoRepository = new TipoRepository();
    it('criar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoInserted = _repository.Insert(tipo);
        console.log(tipoInserted);
        expect(tipo.nome).toBe("Teste");
    });
    it('atualizar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoYUpdated = _repository.Update(tipo);
        console.log(tipoYUpdated);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
    it('Deletar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _repository.Delete(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _repository.GetById(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter toso os tipos', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _repository.GetAll();
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
  

});

