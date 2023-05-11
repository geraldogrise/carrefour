
import {describe, expect} from '@jest/globals';
import { DebitoRepository } from '@repository/DebitoRepository';
import { DebitoService } from '@aggregates/Caixa/Debito/Services/DebitoService';
import { DebitoMock } from '../Mocks/DebitoMock';


describe("débito serviuce", () => {
    const _repository: DebitoRepository = new DebitoRepository();
    const _service: DebitoService = new DebitoService(_repository);
    it('criar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _service.InsertDebito(debito);
        console.log(result);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('atualizar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _service.UpdateDebito(debito);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('Deletar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _service.DeleteDebito(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _service.GetById(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter toso os débitos', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _service.GetAll();
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
  

});

