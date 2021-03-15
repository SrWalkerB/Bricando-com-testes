import "babel-polyfill"
import axios from "axios";
import { test, expect } from "@jest/globals";
import crypto from "crypto";

const generate = () => { return crypto.randomBytes(20).toString("hex"); };



test.only("List products", async () => {    
    
    const result = await axios.get("http://localhost:4560/products");
    const result2 = await axios.get("http://localhost:4560/products");
    const result3 = await axios.get("http://localhost:4560/products");

    expect(result.status).toBe(200);
    expect(result2.status).toBe(200);
    expect(result3.status).toBe(200);
})

test.only("Create Products and Delete", async () => {

    const result1 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()})
    const result2 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()})
    const result3 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()})

    expect(result1.status).toBe(201)
    expect(result2.status).toBe(201)
    expect(result3.status).toBe(201)

    const data1 = result1.data;
    const data2 = result2.data;
    const data3 = result3.data;

    const del_Result_1 = await axios.delete(`http://localhost:4560/products/${data1.id}`);
    const del_Result_2 = await axios.delete(`http://localhost:4560/products/${data2.id}`);
    const del_Result_3 = await axios.delete(`http://localhost:4560/products/${data3.id}`);

    expect(del_Result_1.status).toBe(200);
    expect(del_Result_2.status).toBe(200);
    expect(del_Result_3.status).toBe(200);
})

test.only("Create Update Product and Delete", async () => {

    const createProduct1 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()});
    const createProduct2 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()});
    const createProduct3 = await axios.post("http://localhost:4560/products", {name: generate(), description: generate()});

    expect(createProduct1.status).toBe(201);
    expect(createProduct2.status).toBe(201);
    expect(createProduct3.status).toBe(201);

    const updateProduct1 = await axios.put(`http://localhost:4560/products/${createProduct1.data.id}`, {
        name: generate(), 
        description: generate()
    });

    const updateProduct2 = await axios.put(`http://localhost:4560/products/${createProduct2.data.id}`, {
        name: generate(), 
        description: generate()
    });

    const updateProduct3 = await axios.put(`http://localhost:4560/products/${createProduct3.data.id}`, {
        name: generate(), 
        description: generate()
    });
    
    expect(updateProduct1.data != createProduct1.data).toBe(true);
    expect(updateProduct2.data != createProduct2.data).toBe(true);
    expect(updateProduct3.data != createProduct3.data).toBe(true);

    expect(updateProduct1.status).toBe(200);
    expect(updateProduct2.status).toBe(200);
    expect(updateProduct3.status).toBe(200);

    const deleteProduct1 = await axios.delete(`http://localhost:4560/products/${updateProduct1.data.id}`)
    const deleteProduct2 = await axios.delete(`http://localhost:4560/products/${updateProduct2.data.id}`)
    const deleteProduct3 = await axios.delete(`http://localhost:4560/products/${updateProduct3.data.id}`)

    expect(deleteProduct1.status).toBe(200);
    expect(deleteProduct2.status).toBe(200);
    expect(deleteProduct3.status).toBe(200);

})
