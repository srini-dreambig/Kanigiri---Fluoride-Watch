import type { VercelRequest, VercelResponse } from "@vercel/node";

/** Catch unhandled errors so Vercel returns JSON instead of FUNCTION_INVOCATION_FAILED. */
export function withVercelHandler(
  name: string,
  fn: (req: VercelRequest, res: VercelResponse) => Promise<unknown>
) {
  return async (req: VercelRequest, res: VercelResponse) => {
    try {
      await fn(req, res);
    } catch (err) {
      console.error(name, err);
      if (!res.headersSent) {
        const message = err instanceof Error ? err.message : "Server error";
        res.status(500).json({ error: message });
      }
    }
  };
}

/** Only supported keys for /api routes (see Vercel function config docs). */
export const nodeHandlerConfig = {
  maxDuration: 30,
};
