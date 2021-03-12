import { Request, Response } from "express";
import products_Service from "../services/products_Service";

class Products_Controllers{

    async list_Products(Request: Request, Response: Response){
        try {
            
            const data = await products_Service.list_Product_Service();

            return Response.status(200).json(data);
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }

    async create_Products(Request: Request, Response: Response){
        try {
            
            const { name, description } = Request.body;

            const products = await products_Service.create_Product_Service({
                name: name,
                description: description
            })

            return Response.status(201).json(products);
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }

    async delete_Product(Request: Request, Response: Response){
        try {
            
            const { id } = Request.params;

            const del = await products_Service.delete_Product_Service(id);

            if(del.err) return Response.status(404).json({ err: del.err });

            return Response.status(200).json({ msg: del.msg });
            
        } catch (error) {
            
            console.log(error);
            return Response.status(500).json({ err: error });
        }
    }
}


export default new Products_Controllers;