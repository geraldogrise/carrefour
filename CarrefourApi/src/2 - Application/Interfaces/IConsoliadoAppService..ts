export interface IConsolidadoAppService
{
    GetByData:(data: string)=> Promise<any>;
}
