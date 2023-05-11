
import {describe, expect} from '@jest/globals';
import { CreditoRepository } from '@repository/CreditoRepository';
import { CreditoMock } from '../Mocks/CreditoMock';


describe("crédito repository", () => {
    const _repository: CreditoRepository = new CreditoRepository();
    it('criar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _repository.Insert(credito);
        console.log(result);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('atualizar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _repository.Update(credito);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('Deletar crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _repository.Delete(credito.creditoId);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });
    it('Obter crédito', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _repository.GetById(credito.creditoId);
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });

    it('Obter toso os créditos', async () => {
        const credito = new CreditoMock().ObterCredito();
        const result = _repository.GetAll();
        console.log(result);
        expect(credito.creditoId).toBe(1);
        expect(credito.nome).toBe("Teste");
        expect(credito.valor).toBe(1200);
        expect(credito.tipoId).toBe(6);
    });

});

