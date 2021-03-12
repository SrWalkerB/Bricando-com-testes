import crypto from "crypto";
import "reflect-metadata";
import "./database/connect";
import express from "express";
import products_route from "./routes/products_route";

const app = express();

app.use(express.json());

app.use(products_route);


export default app;