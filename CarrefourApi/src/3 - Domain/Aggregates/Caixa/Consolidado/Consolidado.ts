import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


export class Consolidado
{
    id: number = 0;
    @Column("text")
    nome: string;
    valor: number;
    tipoId: number
    data: Date
}