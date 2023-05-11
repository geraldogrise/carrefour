import { injectable, inject } from "inversify";
import {Credito} from '@aggregates/Caixa/Credito/Credito';
import { ICreditoService } from "@aggregates/Caixa/Credito/Services/ICreditoService";
import { ICreditoRepository } from "@aggregates/Caixa/Credito/Repository/ICreditoRepository";

@injectable()
export class CreditoService implements ICreditoService
{
 
    public constructor(
        @inject("CreditoRepository") private _creditoRepository: ICreditoRepository
    ) {
    }


    public async InsertCredito (credito: Credito): Promise<void>
    {
        await this._creditoRepository.Insert(credito as Credito);
    }

    public async UpdateCredito (credito: Credito): Promise<void>
    {
        await this._creditoRepository.Update(credito as Credito);
    }

    public async DeleteCredito (creditoId: number): Promise<void>
    {
        await this._creditoRepository.Delete(creditoId);
    }

    public async GetById (creditoId: number): Promise<Credito>
    {
        return  await this._creditoRepository.GetById(creditoId);
    }

    public async GetAll (): Promise<Array<Credito>>
    {
        return await this._creditoRepository.GetAll();
    }
}

