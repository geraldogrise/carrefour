import {Debito} from '@aggregates/Caixa/Debito/Debito'; 
import { IRepository } from "@irepository/IRepository";

export interface IDebitoRepository extends IRepository<Debito>
{
    GetById:(debitoId: number)=>  Promise<Debito>;

    GetByData:(data: string)=>  Promise<Debito>;
}