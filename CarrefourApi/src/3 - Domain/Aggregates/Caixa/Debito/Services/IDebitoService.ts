import { Debito } from "@aggregates/Caixa/Debito/Debito";

export interface IDebitoService
{
    InsertDebito:(debito: Debito)=> Promise<void>;
    UpdateDebito:(debito: Debito)=> Promise<void>;
    DeleteDebito:(debitoId: number)=> Promise<void>;
    GetById:(debitoId: number)=>  Promise<Debito>;
    GetAll:()=> Promise<Array<Debito>>;
}
