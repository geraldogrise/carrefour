import { injectable, inject } from "inversify";
import { DebitoModel } from "@models/DebitoModel";
import {Debito} from '@aggregates/Caixa/Debito/Debito';
import { IDebitoAppService } from "@iapps/IDebitoAppService";
import { IDebitoService } from "@aggregates/Caixa/Debito/Services/IDebitoService";
import { ApplicationService } from "@apps/Core/ApplicationService";

@injectable()
export class DebitoAppService extends ApplicationService implements IDebitoAppService
{

    public constructor(
        @inject("DebitoService")  private _debitoService:  IDebitoService
    ) {
        super();
    }

    public async InsertDebito (debito: DebitoModel): Promise<void>
    {
        await this._debitoService.InsertDebito(debito as Debito);
    }

    public async UpdateDebito (debito: DebitoModel): Promise<void>
    {
        await this._debitoService.UpdateDebito(debito as Debito);
    }

    public async DeleteDebito (debitoId: number): Promise<void>
    {
       await this._debitoService.DeleteDebito(debitoId);
    }

    public async GetById (debitoId: number): Promise<DebitoModel> 
    {
        return await this._debitoService.GetById(debitoId);
        
    }

    public async GetAll (): Promise<Array<DebitoModel>>  
    {
        return await this._debitoService.GetAll();
    }
}
