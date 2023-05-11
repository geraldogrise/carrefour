
import {describe, expect} from '@jest/globals';
import { CreditoRepository } from '@repository/CreditoRepository';
import { CreditoService } from '@aggregates/Caixa/Credito/Services/CreditoService';
import { CreditoMock } from '../Mocks/CreditoMock';


describe("crédito serviuce", () => {
    const _repository: CreditoRepository = new CreditoRepository();
    const _service: CreditoService = new CreditoService(_repository);
    it('criar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _service.InsertCredito(credito);
        console.log(result);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('atualizar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _service.UpdateCredito(credito);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('Deletar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _service.DeleteCredito(credito.creditoId);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('Obter crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _service.GetById(credito.creditoId);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });

    it('Obter toso os créditos', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _service.GetAll();
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });

});

