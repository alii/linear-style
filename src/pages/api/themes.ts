import { NowRequest, NowResponse } from "@vercel/node";

const themes: Record<string, string> = {
  "Tokyo Night": "#17161F,#CCCCCC,#1A1A27,#5C5C87,#61D0FF,#17161F",
};

export default function get(req: NowRequest, res: NowResponse) {
  return res.json(themes);
}
