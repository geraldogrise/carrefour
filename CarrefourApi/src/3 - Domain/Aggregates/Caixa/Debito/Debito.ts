import "reflect-metadata";
import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { Tipo } from "../Tipo/Tipo";

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
    /*@ManyToOne(() => Tipo, { eager: true, })
    @JoinColumn({ name: 'tipoId' })
    tipo: Tipo;*/
}