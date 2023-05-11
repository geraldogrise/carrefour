import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "UserModel" ,
    name : "UserModel"
} )
export class UserModel
{
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: [1]
    })
    public userId: number

    @ApiModelProperty( {
        description : "nome" ,
        required : true,
        example: ['geraldo']
    } )
    public nome: string

    @ApiModelProperty( {
        description : "login" ,
        required : true,
        example: ['geraldo']
    })
    public login: string

    @ApiModelProperty( {
        description : "senha" ,
        required : true,
        example: ['xypt@123']
    })
    public senha: string

    @ApiModelProperty( {
        description : "email" ,
        required : true
    } )
    public email: string

    @ApiModelProperty( {
        description : "telefone" ,
        required : true,
        example: ['(71)99999-9999']
    })
    public telefone: string
    @ApiModelProperty( {
        description : "Ativo" ,
        required : true,
        example: ['true']
    })
    public ativo: boolean

  
}