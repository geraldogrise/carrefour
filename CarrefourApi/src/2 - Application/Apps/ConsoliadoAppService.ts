import { injectable, inject } from "inversify";
import { ApplicationService } from "@apps/Core/ApplicationService";
import { IConsolidadoAppService } from "@iapps/IConsoliadoAppService.";
import { IConsolidadoService } from "@aggregates/Caixa/Consolidado/Services/IConsolidadoService";

@injectable()
export class ConsolidadoAppService extends ApplicationService implements IConsolidadoAppService
{

    public constructor(
        @inject("ConsolidadoService")  private _consoliadoService:  IConsolidadoService
    ) {
        super();
    }

    public async GetByData (data: string): Promise<any> 
    {
        return await this._consoliadoService.GetByData(data);
        
    }
}