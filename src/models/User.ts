import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from "typeorm-firebird";

enum Genero{
    Masculino = 'M',
    Femenino = 'F'
}

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    uid: string;

    @Column()
    email: string;

    @Column()
    nombre?: string;

    @Column()
    fecha_nacimiento: Date;

    @Column()
    dni?: number;

    @Column()
    activo?: boolean;

    @Column()
    genero?: Genero;

    constructor(id: string, email: string, fecha_nacimiento: Date){
        this.uid = id;
        this.email= email;
        this.fecha_nacimiento= fecha_nacimiento;
    }

}