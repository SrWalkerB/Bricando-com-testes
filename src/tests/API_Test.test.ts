import "babel-polyfill"
import axios, { Method } from "axios";
import { test, expect } from "@jest/globals";
import crypto from "crypto";
import { stringify } from "uuid";

const generate = () => {
    return crypto.randomBytes(20).toString("hex");
}
 
const requestGET = (method: Method | any, url: string) => {
    return axios({
        method: method,
        url: stringify
    })

test.only("List products", async () => {    
    
    const result = await requestGET("http://localhost:4560/products");

    expect(result.status).toBe(200);
})