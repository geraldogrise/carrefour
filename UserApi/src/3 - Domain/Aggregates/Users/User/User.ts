import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("user")
export class User extends BaseEntity
{
    @PrimaryColumn("int")
    @PrimaryGeneratedColumn()
    userId: number = 0;
    @Column("text")
    nome: string;
    @Column("text")
    login: string;
    @Column("text")
    senha: string;
    @Column("text")
    email: string;
    @Column("text")
    telefone: string;

}