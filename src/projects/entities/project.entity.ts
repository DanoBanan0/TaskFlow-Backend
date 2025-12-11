import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // Le dice a TypeORM que esta clase representa una tabla en la base de datos
export class Project {
    //Columnas
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string; // Columna normal de texto

    @Column({ nullable: true })
    description: string; // Columna que puede ser nula

    @Column({ default: false })
    status: string; // Columna con valor por defecto

    @CreateDateColumn()
    createAt: Date; // Columna que almacena la fecha de creación automáticamente
}
