import cors from "cors";
import "reflect-metadata";
import "./database/connect";
import express from "express";
import products_route from "./routes/products_route";

const app = express();

app.use(cors());

app.use(express.json());

app.use(products_route);


export default app;