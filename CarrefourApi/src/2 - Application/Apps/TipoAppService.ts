import { injectable, inject } from "inversify";
import { TipoModel } from "@models/TipoModel";
import {Tipo} from '@aggregates/Caixa/Tipo/Tipo';
import { ITipoAppService } from "@iapps/ITipoAppService";
import { ITipoService } from "@aggregates/Caixa/Tipo/Services/ITipoService";
import { ApplicationService } from "@apps/Core/ApplicationService";

@injectable()
export class TipoAppService extends ApplicationService implements ITipoAppService
{

    public constructor(
        @inject("TipoService")  private _tipoService:  ITipoService
    ) {
        super();
    }

    public async InsertTipo (tipo: TipoModel): Promise<void>
    {
        await this._tipoService.InsertTipo(tipo as Tipo);
    }

    public async UpdateTipo (tipo: TipoModel): Promise<void>
    {
        await this._tipoService.UpdateTipo(tipo as Tipo);
    }

    public async DeleteTipo (tipoId: number): Promise<void>
    {
       await this._tipoService.DeleteTipo(tipoId);
    }

    public async GetById (tipoId: number): Promise<TipoModel> 
    {
        return await this._tipoService.GetById(tipoId);
        
    }

    public async GetAll (): Promise<Array<TipoModel>>  
    {
        return await this._tipoService.GetAll();
    }
}
