
import {describe, expect} from '@jest/globals';
import { DebitoRepository } from '@repository/DebitoRepository';
import { DebitoService } from '@aggregates/Caixa/Debito/Services/DebitoService';
import { DebitoMock } from '../Mocks/DebitoMock';
import { DebitoAppService } from '@apps/DebitoAppService';



describe("débito serviuce", () => {
    const _repository: DebitoRepository = new DebitoRepository();
    const _service: DebitoService = new DebitoService(_repository);
    const _appService: DebitoAppService = new DebitoAppService(_service);
    it('criar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _appService.InsertDebito(debito);
        console.log(result);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('atualizar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _appService.UpdateDebito(debito);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('Deletar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _appService.DeleteDebito(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _appService.GetById(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter toso os débitos', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _appService.GetAll();
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
  

});

