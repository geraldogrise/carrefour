
import {  injectable } from "inversify";
import { Debito } from '@aggregates/Caixa/Debito/Debito';
import {IDebitoRepository} from '@aggregates/Caixa/Debito/Repository/IDebitoRepository';
import {GenericRepository} from '@core/GenericRepository';

@injectable()
export class DebitoRepository extends GenericRepository<Debito> implements IDebitoRepository
{
    constructor()
    {
        super(Debito);
    }

    public async GetById (id: any): Promise<any>
    {
        return await super.GetByFilter({"debitoId": id});
    }
}

