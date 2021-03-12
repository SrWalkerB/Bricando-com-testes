import "babel-polyfill"
import axios, { Method } from "axios";
import { test, expect } from "@jest/globals";
import crypto from "crypto";
import { stringify } from "uuid";

const generate = () => {
    return crypto.randomBytes(20).toString("hex");
}
 

test.only("List products", async () => {    
    
    const result = await axios({
        method: "GET",
        url: "http://localhost:4560/products"
    });

    expect(result.status).toBe(200);
})