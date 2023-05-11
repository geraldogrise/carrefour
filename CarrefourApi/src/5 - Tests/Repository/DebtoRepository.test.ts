
import {describe, expect} from '@jest/globals';
import { DebitoRepository } from '@repository/DebitoRepository';
import { DebitoMock } from '../Mocks/DebitoMock';


describe("débito repository", () => {
    const _repository: DebitoRepository = new DebitoRepository();
    it('criar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _repository.Insert(debito);
        console.log(result);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('atualizar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _repository.Update(debito);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
    it('Deletar débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _repository.Delete(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter débito', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _repository.GetById(debito.debitoId);
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });

    it('Obter toso os débitos', async () => {
        const debito = new DebitoMock().ObterDebito();
        const result = _repository.GetAll();
        console.log(result);
        expect(debito.debitoId).toBe(1);
        expect(debito.nome).toBe("Teste");
        expect(debito.valor).toBe(1200);
        expect(debito.tipoId).toBe(1);
    });
  

});

