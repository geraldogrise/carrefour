import "reflect-metadata";
import {Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("tipo")
export class Tipo extends BaseEntity
{
    @PrimaryColumn("int")
    @PrimaryGeneratedColumn()
    tipoId: number = 0;
    @Column("text")
    nome: string;
    /*@OneToMany(() => Debito, (debito) => debito.tipo)
    debitos: Debito[];
    @OneToMany(() => Credito, (credito) => credito.tipo)
    creditos: Credito[];*/
}