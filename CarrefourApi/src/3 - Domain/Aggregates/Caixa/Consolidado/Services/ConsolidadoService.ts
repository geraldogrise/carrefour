import { injectable, inject } from "inversify";
import { Consolidado } from "../Consolidado";
import { ICreditoRepository } from "@aggregates/Caixa/Credito/Repository/ICreditoRepository";
import { IDebitoRepository } from "@aggregates/Caixa/Debito/Repository/IDebitoRepository";
import { IConsolidadoService } from "./IConsolidadoService";

@injectable()
export class ConsolidadoService implements IConsolidadoService
{
 
    public constructor(
        @inject("DebitoRepository") private _debitoRepository: IDebitoRepository
    ) {
    }

    public async GetByData (data: string): Promise<any>
    {
        return  await this._debitoRepository.GetByData(data);
    }

}

