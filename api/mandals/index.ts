import type { VercelRequest, VercelResponse } from "@vercel/node";
import { formatDbError } from "../../lib/dbError";
import { listMandals } from "../../lib/handlers/mandals";
import { nodeHandlerConfig, withVercelHandler } from "../../lib/vercelRoute";

export const config = nodeHandlerConfig;

export default withVercelHandler("GET /api/mandals", async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
    const data = await listMandals(lang);
    return res.status(200).json(data);
  } catch (err) {
    console.error("GET /api/mandals", err);
    return res.status(500).json({ error: formatDbError(err) });
  }
});
