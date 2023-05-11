import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, request } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import { Metric } from '../Configuration/Metrics/Metric';

@ApiPath({
    path: "/metricss",
    name: "metricss"
})
@controller("/metricss")
export class MetricsController extends BaseController implements interfaces.Controller
{

    private metrica : any
    public constructor(
    ) {
        super();
        this. metrica = new Metric();
    }

    @ApiOperationGet({
        path: "/",
        description: "Obter metricas",
        summary: "Obter metricas",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/")
    public async ObterMetrica( @request() req: express.Request ,@response() res: express.Response)
     {
        return this.metrica.FillDurationHistogram(req, res);
    }

}
