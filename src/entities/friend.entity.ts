import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("friends")
export class Friends {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 80, unique: true })
    email: string;

    @Column()
    phone: string;

    @Column()
    userId: string;

    @Column()
    friendId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User)
    user: User[];

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}