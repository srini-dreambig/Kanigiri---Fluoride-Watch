import { Router } from "express";
import { getMandalBySlug, listMandals } from "../handlers/mandals.ts";

export const mandalsRouter = Router();

mandalsRouter.get("/", async (req, res) => {
  try {
    const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
    const data = await listMandals(lang);
    res.json(data);
  } catch (err) {
    console.error("GET /api/mandals", err);
    res.status(500).json({ error: "Failed to load mandals" });
  }
});

mandalsRouter.get("/:slug", async (req, res) => {
  try {
    const lang = typeof req.query.lang === "string" ? req.query.lang : undefined;
    const result = await getMandalBySlug(req.params.slug, lang);
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error("GET /api/mandals/:slug", err);
    res.status(500).json({ error: "Failed to load mandal" });
  }
});
