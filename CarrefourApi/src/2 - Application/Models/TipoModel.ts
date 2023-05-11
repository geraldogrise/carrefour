import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "StatusModel" ,
    name : "StatusModel"
} )
export class TipoModel
{
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['1']
    })
    public tipoId: number

    @ApiModelProperty( {
        description : "nome" ,
        required : true
    } )
    public nome: string
}