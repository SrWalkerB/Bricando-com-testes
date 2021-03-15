import { Router } from "express";
import Products_Controllers from "../controllers/Products_Controllers";

const products_route = Router();

products_route.get("/products", Products_Controllers.list_Products);

products_route.post("/products", Products_Controllers.create_Products);

products_route.put("/products/:id", Products_Controllers.update_Product);

products_route.delete("/products/:id", Products_Controllers.delete_Product);



export default products_route;