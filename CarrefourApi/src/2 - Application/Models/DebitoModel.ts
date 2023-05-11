import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "DebitoModel" ,
    name : "DebitoModel"
} )
export class DebitoModel
{
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['1']
    })
    public debitoId: number

    @ApiModelProperty( {
        description : "nome" ,
        required : true
    } )
    public nome: string

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