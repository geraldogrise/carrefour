import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("credito")
export class Credito extends BaseEntity
{
    @PrimaryColumn("int")
    @PrimaryGeneratedColumn()
    creditoId: number = 0;
    @Column("text")
    nome: string;
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    valor: number;
    @Column("int")
    tipoId: number
    @Column("datetime")
    data: Date
}