import { Tipo } from "@aggregates/Caixa/Tipo/Tipo";

export interface ITipoService
{
    InsertTipo:(tipo: Tipo)=> Promise<Tipo>;
    UpdateTipo:(tipo: Tipo)=> Promise<Tipo>;
    DeleteTipo:(tipoId: number)=> Promise<any>;
    GetById:(tipoId: number)=>  Promise<Tipo>;
    GetAll:()=> Promise<Array<Tipo>>;
}
