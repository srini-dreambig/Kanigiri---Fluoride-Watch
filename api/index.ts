/**
 * Single Vercel serverless entry for all /api/* routes (see vercel.json rewrite).
 * serverless-http bridges Express to the Lambda-style handler Vercel expects.
 */
import serverless from "serverless-http";
import app from "../server/app";

export default serverless(app);
