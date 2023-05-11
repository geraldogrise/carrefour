
import {describe, expect} from '@jest/globals';
import { TipoRepository } from '@repository/TipoRepository';
import { TipoService } from '@aggregates/Caixa/Tipo/Services/TipoService';
import { TipoMock } from '../Mocks/TipoMock';


describe("user serviuce", () => {
    const _repository: TipoRepository = new TipoRepository();
    const _service: TipoService = new TipoService(_repository);
    it('criar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoInserted = _service.InsertTipo(tipo);
        console.log(tipoInserted);
        expect(tipo.nome).toBe("Teste");
    });
    it('atualizar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoYUpdated = _service.UpdateTipo(tipo);
        console.log(tipoYUpdated);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
    it('Deletar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _service.DeleteTipo(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _service.GetById(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter toso os tipos', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _service.GetAll();
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
  

});

