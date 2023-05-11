import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "ConsolidadoModel" ,
    name : "ConsolidadoModel"
} )
export class ConsolidadoModel
{
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['1']
    })
    public id: number

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
        description : "data" ,
        required : true,
        example: ['']
    })
    public data: Date
}