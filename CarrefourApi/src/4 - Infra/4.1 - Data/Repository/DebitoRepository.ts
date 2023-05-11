
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

    public async GetByData (data: string): Promise<any>
    {
        const query = "select creditoId as id, cred.nome as nome, convert(valor,decimal) as valor, data, tip.tipoId, tip.nome as tipo from credito as cred"
        + " inner join tipo as tip on tip.tipoId = cred.tipoId" 
        + " where CONVERT(data, DATE) = '"+ data+ "'"
        + " union " 
        + " select debitoid as id, deb.nome, convert((valor * -1),decimal)  as valor, data, tip2.tipoId, tip2.nome as tipo from debito as deb"
        + " inner join tipo as tip2 on tip2.tipoId = deb.tipoId" 
        + " where CONVERT(data, DATE)  =  '"+ data+ "'";
        console.log(query);
        return await super.ExecuteQuery(query);
    }
}

