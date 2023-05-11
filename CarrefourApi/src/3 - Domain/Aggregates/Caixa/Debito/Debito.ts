import "reflect-metadata";
import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("debito")
export class Debito extends BaseEntity
{
    @PrimaryColumn("int")
    @PrimaryGeneratedColumn()
    debitoId: number = 0;
    @Column("text")
    nome: string;
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    valor: number;
    @Column("int")
    tipoId: number
    @Column("datetime")
    data: Date
}