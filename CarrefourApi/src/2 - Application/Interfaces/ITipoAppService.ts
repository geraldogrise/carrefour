import { TipoModel } from "../Models/TipoModel";

export interface ITipoAppService
{
    InsertTipo:(tipo: TipoModel)=> Promise<void>;
    UpdateTipo:(tipo: TipoModel)=> Promise<void>;
    DeleteTipo:(tipoId: number)=> Promise<void>;
    GetById:(tipoId: number)=> Promise<TipoModel>;
    GetAll:()=> Promise<Array<TipoModel>>;
}
