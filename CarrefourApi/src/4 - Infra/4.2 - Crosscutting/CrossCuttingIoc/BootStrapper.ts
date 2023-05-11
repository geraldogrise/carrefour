import "reflect-metadata";
import { Container } from "inversify";
import { CreditoAppService } from "@apps/CreditoAppService";
import { DebitoAppService } from "@apps/DebitoAppService";
import { TipoAppService } from "@apps/TipoAppService";
import { ICreditoAppService } from "@iapps/ICreditoAppService";
import { IDebitoAppService } from "@iapps/IDebitoAppService";
import { ITipoAppService } from "@iapps/ITipoAppService";
import { CreditoService } from "@aggregates/Caixa/Credito/Services/CreditoService";
import { DebitoService } from "@aggregates/Caixa/Debito/Services/DebitoService";
import { TipoService } from "@aggregates/Caixa/Tipo/Services/TipoService";
import { ICreditoService } from "@aggregates/Caixa/Credito/Services/ICreditoService";
import { IDebitoService } from "@aggregates/Caixa/Debito/Services/IDebitoService";
import { ITipoService } from "@aggregates/Caixa/Tipo/Services/ITipoService";
import { CreditoRepository } from "@repository/CreditoRepository";
import { DebitoRepository } from "@repository/DebitoRepository";
import { TipoRepository } from "@repository/TipoRepository";
import { ICreditoRepository } from "@aggregates/Caixa/Credito/Repository/ICreditoRepository";
import { IDebitoRepository } from "@aggregates/Caixa/Debito/Repository/IDebitoRepository";
import { ITipoRepository } from "@aggregates/Caixa/Tipo/Repository/ITipoRepository";


export class BootStrapper
{
    public static RegisterServices(container: Container): void
    {
        /* --------------- Application -----------------------*/
        container.bind<ICreditoAppService>('CreditoAppService').to(CreditoAppService);
        container.bind<IDebitoAppService>('DebitoAppService').to(DebitoAppService);
        container.bind<ITipoAppService>('TipoAppService').to(TipoAppService);
 
        /* --------------- Domain -----------------------*/
        container.bind<ICreditoService>('CreditoService').to(CreditoService);
        container.bind<IDebitoService>('DebitoService').to(DebitoService);
        container.bind<ITipoService>('TipoService').to(TipoService);
     
        /* --------------- Data -----------------------*/
        container.bind<ICreditoRepository>('CreditoRepository').to(CreditoRepository);
        container.bind<IDebitoRepository>('DebitoRepository').to(DebitoRepository);
        container.bind<ITipoRepository>('TipoRepository').to(TipoRepository);
    }


}
