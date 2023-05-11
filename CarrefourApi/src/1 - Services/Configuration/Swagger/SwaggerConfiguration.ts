import * as express from "express";
import * as swagger from "swagger-express-typescript";
import { CreditoSwagger } from "@swagger/CreditoSweagger";
import { DebitoSwagger } from "@swagger/DebitoSwagger";
import { TipoSwagger } from "@swagger/TipoSwagge.";

export class SwaggerConfiguration
{
    public static AddSwaggerConfig(app: any): void
    {
        app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
        app.use('/api-docs/swagger/assets',express.static('node_modules/swagger-ui-dist'));
        
        app.use( swagger.express(
            {
                definition : {
                    info : {
                        title : "Carrefour API" ,
                        version : "1.0"
                    },
                    models:{
                        CreditoModel: CreditoSwagger.ToModel(),
                        DebitoModel: DebitoSwagger.ToModel(),
                        TipoModel: TipoSwagger.ToModel()
                    },
                    externalDocs : {
                        url : "http://grisecorp.com"
                    }
                }
            }
        ) );
    }
}