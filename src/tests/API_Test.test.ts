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

