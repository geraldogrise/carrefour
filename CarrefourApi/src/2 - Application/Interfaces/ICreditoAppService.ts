import { CreditoModel } from "../Models/CreditoModel";

export interface ICreditoAppService
{
    InsertCredito:(credito: CreditoModel)=> Promise<void>;
    UpdateCredito:(credito: CreditoModel)=> Promise<void>;
    DeleteCredito:(creditoId: number)=> Promise<void>;
    GetById:(creditoId: number)=> Promise<CreditoModel>;
    GetAll:()=> Promise<Array<CreditoModel>>;
}
