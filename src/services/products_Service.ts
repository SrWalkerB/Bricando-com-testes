import { getConnection, getCustomRepository } from "typeorm";
import ProductsRepository from "../repositories/ProductsRepositorys";

interface ICreateProduct{
    name: string,
    description: string
}

interface IUpdateProduct{
    id: string,
    name?: string,
    description?: string
}

class Products_Services{

    async list_Product_Service(){
        return await getCustomRepository(ProductsRepository).find();
    }

    async create_Product_Service(data: ICreateProduct){

        const productsRepository = await getCustomRepository(ProductsRepository);
        
        const products = productsRepository.create({
            name: data.name,
            description: data.description
        })

        await productsRepository.save(products);
        return products;
    }

    async update_Product_Service(data: IUpdateProduct){

        const id = data.id;
        const productsRepository = await getCustomRepository(ProductsRepository);

        const seacherProduct = await productsRepository.findOne({id});

        if(!seacherProduct) {
            return { err: "Products not found"};  
        } 

       const newData = await productsRepository.save({
            id: id,
            name: data.name!,
            description: data.description!
       });

        return {msg: newData};
    }

    async delete_Product_Service(id: string){

        const productsRepository = await getCustomRepository(ProductsRepository);

        const seacherProduto = await productsRepository.find({id});
        
        if(seacherProduto.length == 0) return { err: "Product not found" };

        await productsRepository.delete({id});

        return { msg: "Deletado!" };
    }
}

export default new Products_Services;