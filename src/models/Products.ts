import { v4 as uuid } from "uuid";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("products")
class Products{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    created_at: string

    @BeforeUpdate()
    @BeforeInsert()
    generateID(){
        this.id = uuid();
    }
}


export default Products;