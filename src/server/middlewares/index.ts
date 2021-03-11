import { Express } from "express";
import { configureHelmet } from "./helmet";
import { configureCompression } from "./compression";
import { configureViews } from "./views";

export const configureMiddlewares = (server: Express) => {
  configureHelmet(server);
  configureViews(server);
  configureCompression(server);
};
