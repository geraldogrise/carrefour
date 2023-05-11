
import {  injectable } from "inversify";
import { Credito } from '@aggregates/Caixa/Credito/Credito';
import {ICreditoRepository} from '@aggregates/Caixa/Credito/Repository/ICreditoRepository';
import {GenericRepository} from '@core/GenericRepository';

@injectable()
export class CreditoRepository extends GenericRepository<Credito> implements ICreditoRepository
{
    constructor()
    {
        super(Credito);
    }

    public async GetById (id: any): Promise<any>
    {
        return await super.GetByFilter({"creditoId": id});
    }

    public async GetByData (data: any): Promise<any>
    {
        return await super.GetByFilter({"data": data});
    }
}

