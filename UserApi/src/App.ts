  
import "reflect-metadata";
import * as express from "express";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { buildProviderModule } from "inversify-binding-decorators";
import * as bodyParser from 'body-parser';
import {BootStrapper} from '@ioc/BootStrapper';
import { SwaggerConfiguration } from "./1 - Services/Configuration/Swagger/SwaggerConfiguration";
import "@controllers/UserController";
import "@controllers/HealthCheckController";
import "@controllers/MetricsController";
import { CustomAuthProvider } from "./1 - Services/Configuration/Providers/CustomAuthProvider";



export class App 
{
    public server: InversifyExpressServer;
    public container: Container;
    private appPort: string = process.env.APP_PORT || "9001";

    public constructor () 
    {
        this.container = new Container({skipBaseClassChecks: true});
        console.log("Database Hostname " + (process.env.DB_HOST || "127.0.0.1"));
        console.log("Database Port " + (process.env.DB_PORT || "3037"));
    }

    public Run()
    {
       
        this.RegisterDependencies();
        this.CreateServer();
    }

    private middlewares (): void 
    {
        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({ extended: true  }));
            app.use(bodyParser.json());
            SwaggerConfiguration.AddSwaggerConfig(app);
        });
    }


    private CreateServer(): void
    {
        this.container.load(buildProviderModule());
        this.server = new InversifyExpressServer(
            this.container, null, null, null, CustomAuthProvider
        );
        //this.server = new InversifyExpressServer(this.container);
        this.middlewares();
        let app = this .server.build();
        this.SetError();
        app.listen(this.appPort);
        console.log("Aplicação user funcionando na porta " + this.appPort);
     ;
    }

    private  SetError(): void
    {
        this.server.setErrorConfig( ( app : any ) => {
            app.use( ( err : Error , request : express.Request , response : express.Response , next : express.NextFunction ) => {
                console.error( err.stack );
                response.status( 500 ).send( "Something broke!" );
            });
        });
    }

    private RegisterDependencies(): void 
    {
        return BootStrapper.RegisterServices(this.container);
    }

}
