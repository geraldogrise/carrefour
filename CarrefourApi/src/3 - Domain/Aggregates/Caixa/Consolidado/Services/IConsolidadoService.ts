import { Consolidado } from "@aggregates/Caixa/Consolidado/Consolidado";

export interface IConsolidadoService
{
    GetByData:(data: string)=>  Promise<any>;
}
