
import {describe, expect} from '@jest/globals';
import { TipoRepository } from '@repository/TipoRepository';
import { TipoService } from '@aggregates/Caixa/Tipo/Services/TipoService';
import { TipoMock } from '../Mocks/TipoMock';
import { TipoAppService } from '@apps/TipoAppService';


describe("user serviuce", () => {
    const _repository: TipoRepository = new TipoRepository();
    const _service: TipoService = new TipoService(_repository);
    const _appService: TipoAppService = new TipoAppService(_service);
    
    it('criar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoInserted = _appService.InsertTipo(tipo);
        console.log(tipoInserted);
        expect(tipo.nome).toBe("Teste");
    });
    it('atualizar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoYUpdated = _appService.UpdateTipo(tipo);
        console.log(tipoYUpdated);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
    it('Deletar tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _appService.DeleteTipo(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter tipo', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _appService.GetById(tipo.tipoId);
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });

    it('Obter toso os tipos', async () => {
        const tipo = new TipoMock().ObterTipo();
        const tipoDeleted = _appService.GetAll();
        console.log(tipoDeleted);
        expect(tipo.tipoId).toBe(1);
        expect(tipo.nome).toBe("Teste");
    });
  

});

