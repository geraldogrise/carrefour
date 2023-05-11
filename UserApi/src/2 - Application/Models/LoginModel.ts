import 'reflect-metadata';
import { ApiModel, ApiModelProperty } from "swagger-express-typescript"

@ApiModel( {
    description : "UserModel" ,
    name : "UserModel"
} )
export class LoginModel
{
   

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

}