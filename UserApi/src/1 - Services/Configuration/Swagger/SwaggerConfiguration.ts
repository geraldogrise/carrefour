import * as express from "express";
import * as swagger from "swagger-express-typescript";
import { UserSwagger } from "@swagger/UserSwagger";
import { LoginSwagger } from "@swagger/LoginSwagger";
const swaggerUi = require("swagger-ui-express");

export class SwaggerConfiguration
{
    public static AddSwaggerConfig(app: any): void
    {
        app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
        app.use('/api-docs/swagger/assets',express.static('node_modules/swagger-ui-dist'));
        //app.use()
        
        app.use( swagger.express(
            {
                definition : {
                    info : {
                        title : "User API" ,
                        version : "1.0",

                    },
                    models:{
                        UserModel: UserSwagger.ToModel(),
                        LoginModel: LoginSwagger.ToModel()
                    },
                    externalDocs : {
                        url : "http://grisecorp.com"

                    },
                }
            }
        ) );
    }

    private static getSwaggerSpec()
    {
        return{
            definition: {
                openapi: '3.0.3',
                info: {
                    title: "Carrefour",
                    version: "1.0.0"
                },
                components: {
                    securitySchemes: {
                        Authorization: {
                            type: "http",
                            scheme: "bearer",
                            bearerFormat: "JWT",
                            value: "Bearer <JWT token here>"
                        }
                    }
                }
            },
            apis: [
                './dist/**/*.js'
            ]
        };    
    }
}