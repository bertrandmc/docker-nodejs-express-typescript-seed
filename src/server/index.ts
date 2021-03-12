import express from "express";
import { configureViews, helmet, compression } from "./middlewares";
import { configureRouter } from "./routes";

export const server = express();

// middlewares
server.use(helmet());
server.use(compression());

// views
configureViews(server);

// routes
configureRouter(server);
