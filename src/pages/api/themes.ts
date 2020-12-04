import { NowRequest, NowResponse } from "@vercel/node";

const themes: Record<string, string> = {
  "Tokyo Night": "#17161F,#CCCCCC,#1A1A27,#5C5C87,#61D0FF,#17161F",
  "Midnight": "#17161F,#CCCCCC,#1A1A27,#5C5C87,#61D0FF,#17161F",
  "Dawn": "#2A222E,#EEEFF1,#382A3C,#EEEFF1,#A84376,#FFFFFF",
  "Pale": "#292D3E,#EEEFF1,#292D3E,#EEEFF1,#7D57C1,#FFFFFF",
  "Barbie Dreamhouse": "#E2DAF1,#593E74,#FCDEEE,#593E74,#B8FAFA,#8B6BC7",
};

export default function get(req: NowRequest, res: NowResponse) {
  return res.json(themes);
}
