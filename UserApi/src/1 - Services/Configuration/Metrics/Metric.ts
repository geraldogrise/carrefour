const url = require('url')
const client = require('prom-client');
import { Response, Request } from 'express';
export class Metric
{
    private register : any;
    private appName: string = process.env.APP_NAME || "CaixaApi";
    private httpRequestDurationMicroseconds: any
    public constructor()
    {
       this.register = new client.Registry();
    }

    private setRegistry()
    {
        this.register.setDefaultLabels({
            app: this.appName
        });
        let resg = this.register;
        client.collectDefaultMetrics({ resg })
       
    }

    private CreateDurationHistogram()
    {
        this.httpRequestDurationMicroseconds = new client.Histogram({
            name: 'http_request_duration_seconds',
            help: 'Duração das requisições HTTP em microsegundos',
            labelNames: ['method', 'route', 'code'],
            buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
         })
         this.register.registerMetric(this.httpRequestDurationMicroseconds)
    }


    public FillDurationHistogram (req: Request, res: Response)
    {
        /*this.setRegistry();
        this.CreateDurationHistogram();
        const end = this.httpRequestDurationMicroseconds.startTimer()
        const route = url.parse(req.url).pathname;
        end({ route, code: res.status.toString(), method: req.method })*/
    }
}

