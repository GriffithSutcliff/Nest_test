import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn() id:string;
}
