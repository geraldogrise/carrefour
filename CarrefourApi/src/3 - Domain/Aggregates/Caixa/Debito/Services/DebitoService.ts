import { injectable, inject } from "inversify";
import {Debito} from '@aggregates/Caixa/Debito/Debito';
import { IDebitoService } from "@aggregates/Caixa/Debito/Services/IDebitoService";
import { IDebitoRepository } from "@aggregates/Caixa/Debito/Repository/IDebitoRepository";

@injectable()
export class DebitoService implements IDebitoService
{
 
    public constructor(
        @inject("DebitoRepository") private _debitoRepository: IDebitoRepository
    ) {
    }


    public async InsertDebito (debito: Debito): Promise<void>
    {
        await this._debitoRepository.Insert(debito as Debito);
    }

    public async UpdateDebito (debito: Debito): Promise<void>
    {
        await this._debitoRepository.Update(debito as Debito);
    }

    public async DeleteDebito (debitoId: number): Promise<void>
    {
        await this._debitoRepository.Delete(debitoId);
    }

    public async GetById (debitoId: number): Promise<Debito>
    {
        return  await this._debitoRepository.GetById(debitoId);
    }

    public async GetAll (): Promise<Array<Debito>>
    {
        return await this._debitoRepository.GetAll();
    }
}

