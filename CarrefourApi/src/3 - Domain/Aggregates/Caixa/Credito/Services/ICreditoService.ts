import { Credito } from "@aggregates/Caixa/Credito/Credito";

export interface ICreditoService
{
    InsertCredito:(credito: Credito)=> Promise<void>;
    UpdateCredito:(credito: Credito)=> Promise<void>;
    DeleteCredito:(creditoId: number)=> Promise<void>;
    GetById:(creditoId: number)=>  Promise<Credito>;
    GetAll:()=> Promise<Array<Credito>>;
}
