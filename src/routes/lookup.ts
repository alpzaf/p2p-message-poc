import type { Request, Response } from "express";
import { getNodeByUser, getNodes } from "../servers";
import { lookupUser } from "../lookupUser";

export function lookup(req: Request, res: Response) {
  const { user } = req.query as { user: string };
  const serverByUser = getNodeByUser(req.query.user as string);

  if (!serverByUser) {
    for (let server of getNodes()) {
      try {
        lookupUser(server.uri, user);
      } catch (e) {
        console.log(e);
      }
    }
  }

  res.json(serverByUser);
}
