import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "CreditoModel" ,
    name : "CreditoModel"
} )
export class CreditoModel
{
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['1']
    })
    public creditoId: number

    @ApiModelProperty( {
        description : "nome" ,
        required : true
    } )
    public nome: string

    @ApiModelProperty( {
        description : "valor" ,
        required : true
    } )
    public valor: number

    @ApiModelProperty( {
        description : "tipoId" ,
        required : true,
        example: ['1']
    })
    public tipoId: number

    @ApiModelProperty( {
        description : "userId" ,
        required : true,
        example: ['1']
    })
    public userId: number
}