import { Express } from "express";
import helmet from "helmet";

export const configureHelmet = (server: Express) => {
  server.use(helmet());
};
