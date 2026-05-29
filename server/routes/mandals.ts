import { Router } from "express";
import { getMandalBySlug, listMandals } from "../../lib/handlers/mandals.ts";
import { formatDbError } from "../../lib/dbError.ts";
import { asyncRoute } from "../asyncRoute.ts";

export const mandalsRouter = Router();

mandalsRouter.get(
  "/",
  asyncRoute(async (req, res) => {
    try {
      const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
      const data = await listMandals(lang);
      res.json(data);
    } catch (err) {
      console.error("GET /api/mandals", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);

mandalsRouter.get(
  "/:slug",
  asyncRoute(async (req, res) => {
    try {
      const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
      const result = await getMandalBySlug(req.params.slug, lang);
      res.status(result.status).json(result.body);
    } catch (err) {
      console.error("GET /api/mandals/:slug", err);
      res.status(500).json({ error: formatDbError(err) });
    }
  })
);
