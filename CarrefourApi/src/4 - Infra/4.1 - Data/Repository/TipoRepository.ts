
import {  injectable } from "inversify";
import { Tipo } from '@aggregates/Caixa/Tipo/Tipo';
import {ITipoRepository} from '@aggregates/Caixa/Tipo/Repository/ITipoRepository';
import {GenericRepository} from '@core/GenericRepository';

@injectable()
export class TipoRepository extends GenericRepository<Tipo> implements ITipoRepository
{
    constructor()
    {
        super(Tipo);
    }

    public async GetById (id: any): Promise<any>
    {
        return await super.GetByFilter({"tipoId": id});
    }
}

