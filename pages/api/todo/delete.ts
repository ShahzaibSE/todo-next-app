import { deleteTodo } from "./list";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    let { id } = req.query;
    deleteTodo(id);
    res.status(200).json({ msg: "todo deleted" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}