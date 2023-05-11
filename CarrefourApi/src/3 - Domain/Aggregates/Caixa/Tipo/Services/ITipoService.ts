import { Tipo } from "@aggregates/Caixa/Tipo/Tipo";

export interface ITipoService
{
    InsertTipo:(tipo: Tipo)=> Promise<void>;
    UpdateTipo:(tipo: Tipo)=> Promise<void>;
    DeleteTipo:(tipoId: number)=> Promise<void>;
    GetById:(tipoId: number)=>  Promise<Tipo>;
    GetAll:()=> Promise<Array<Tipo>>;
}
