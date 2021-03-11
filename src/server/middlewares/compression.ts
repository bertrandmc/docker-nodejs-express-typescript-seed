import { Express } from "express";
import compression from "compression";

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

export const configureCompression = (server: Express) => {
  server.use(compression({ filter: shouldCompress }));
};