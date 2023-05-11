import { injectable, inject } from "inversify";
import { CreditoModel } from "@models/CreditoModel";
import {Credito} from '@aggregates/Caixa/Credito/Credito';
import { ICreditoAppService } from "@iapps/ICreditoAppService";
import { ICreditoService } from "@aggregates/Caixa/Credito/Services/ICreditoService";
import { ApplicationService } from "@apps/Core/ApplicationService";

@injectable()
export class CreditoAppService extends ApplicationService implements ICreditoAppService
{

    public constructor(
        @inject("CreditoService")  private _creditoService:  ICreditoService
    ) {
        super();
    }

    public async InsertCredito (credito: CreditoModel): Promise<void>
    {
        await this._creditoService.InsertCredito(credito as Credito);
    }

    public async UpdateCredito (credito: CreditoModel): Promise<void>
    {
        await this._creditoService.UpdateCredito(credito as Credito);
    }

    public async DeleteCredito (creditoId: number): Promise<void>
    {
       await this._creditoService.DeleteCredito(creditoId);
    }

    public async GetById (creditoId: number): Promise<CreditoModel> 
    {
        return await this._creditoService.GetById(creditoId);
        
    }

    public async GetAll (): Promise<Array<CreditoModel>>  
    {
        return await this._creditoService.GetAll();
    }
}
