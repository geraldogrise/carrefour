import { DebitoModel } from "../Models/DebitoModel";

export interface IDebitoAppService
{
    InsertDebito:(debito: DebitoModel)=> Promise<void>;
    UpdateDebito:(debito: DebitoModel)=> Promise<void>;
    DeleteDebito:(debitoId: number)=> Promise<void>;
    GetById:(debitoId: number)=> Promise<DebitoModel>;
    GetAll:()=> Promise<Array<DebitoModel>>;
}
