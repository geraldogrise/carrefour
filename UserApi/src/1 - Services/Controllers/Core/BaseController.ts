import { Response, Request, NextFunction } from 'express';
import { injectable, interfaces } from "inversify";
import { Metric } from '../../Configuration/Metrics/Metric';
const jwt = require('jsonwebtoken');
export class BaseController
{
    private metrica : any
    public constructor()
    {
        this.metrica = new Metric();
       
    }
  
    public async SendOk (req: Request, res: Response, data: any, message: string ): Promise<any>
    {
        
        const response  =  {
            statusCode: 200,
            message: message,
            data: data
        };
       this.metrica.FillDurationHistogram(req,res);
       return res.json(response);
    }

    public async SendNotFound (req: Request, res: Response, data: any, message: string ): Promise<any>
    {
        
        const response  =  {
            statusCode: 400,
            message: message,
            data: null
        };
       this.metrica.FillDurationHistogram(req,res);
       return res.json(response);
    }

    public async SendError (req: Request, res: Response, ex: Error ): Promise<any>
    {
        const response  =  {
            statusCode: 500,
            message: ex.message,
            data:  ex.message,
        };
        this.metrica.FillDurationHistogram(req,res);
        return  res.json(response);
    }

    public async SendErr (req: Request, res: Response, message: String ): Promise<any>
    {
        const response  =  {
            statusCode: 500,
            message: message,
            data:  message,
        };
        this.metrica.FillDurationHistogram(req,res);
        return  res.json(response);
    }


    public IsValid(req: Request): boolean
    {
        let valid: boolean = true;
        if(!req.body || Object.keys(req.body).length == 0) valid = false;
        return valid;
    }

    public static authenticateJWT(req: any, res: any, next: any) : any
    {
        const authHeader = req.headers.authorization;
        if (authHeader) 
        {
            const jwtToken = authHeader.split(' ')[1];
            jwt.verify(jwtToken, process.env.SECRET || "GRISE", (err: any, user:any) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                next();
    
            });
        }
        else {
            res.sendStatus(401);
        }
    }
}

