import { NowRequest, NowResponse } from "@vercel/node";
import themes from "../../themes.json";

export default function get(req: NowRequest, res: NowResponse) {
  return res.json(themes);
}
