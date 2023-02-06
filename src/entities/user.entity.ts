import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Friends } from "./friend.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 80, unique: true })
    email: string;

    @Column({ length: 60 })
    password: string;

    @Column()
    isAdm: boolean;

    @Column({ default: true })
    isActive: boolean;

    @Column({ length: 20, unique: true })
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // Relação 1:N com tabela friends
    @OneToMany(() => Friends, friend => friend.user, { eager: true, })
    friends: Friends[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}