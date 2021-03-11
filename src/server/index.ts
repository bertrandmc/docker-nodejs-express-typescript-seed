import express from "express";
import { configureMiddlewares } from "./middlewares";
import { configureRouter } from "./routes";

export const server = express();

configureMiddlewares(server);
configureRouter(server);
