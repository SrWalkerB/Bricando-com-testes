import { v4 as uuid } from "uuid";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("products")
class Products{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @BeforeUpdate()
    @BeforeInsert()
    generateID(){
        this.id = uuid();
    }
}


export default Products;