import { injectable, inject } from "inversify";
import {Tipo} from '@aggregates/Caixa/Tipo/Tipo';
import { ITipoService } from "@aggregates/Caixa/Tipo/Services/ITipoService";
import { ITipoRepository } from "@aggregates/Caixa/Tipo/Repository/ITipoRepository";

@injectable()
export class TipoService implements ITipoService
{
 
    public constructor(
        @inject("TipoRepository") private _tipoRepository: ITipoRepository
    ) {
    }


    public async InsertTipo (tipo: Tipo): Promise<Tipo>
    {
        await this._tipoRepository.Insert(tipo as Tipo);
        return tipo;
    }

    public async UpdateTipo (tipo: Tipo): Promise<Tipo>
    {
        await this._tipoRepository.Update(tipo as Tipo);
        return tipo;
    }

    public async DeleteTipo (tipoId: number): Promise<void>
    {
        await this._tipoRepository.Delete(tipoId);
    }

    public async GetById (tipoId: number): Promise<Tipo>
    {
        return  await this._tipoRepository.GetById(tipoId);
    }

    public async GetAll (): Promise<Array<Tipo>>
    {
        return await this._tipoRepository.GetAll();
    }
}

