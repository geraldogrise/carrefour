import {Tipo} from '@aggregates/Caixa/Tipo/Tipo'; 
import { IRepository } from "@irepository/IRepository";

export interface ITipoRepository extends IRepository<Tipo>
{
    GetById:(tipoId: number)=>  Promise<Tipo>;
}