import {Credito} from '@aggregates/Caixa/Credito/Credito'; 
import { IRepository } from "@irepository/IRepository";

export interface ICreditoRepository extends IRepository<Credito>
{
    GetById:(creditoId: number)=>  Promise<Credito>;
}