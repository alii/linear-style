import { NowRequest, NowResponse } from "@vercel/node";

const themes: Record<string, string> = {
  "Tokyo Night": "#17161F,#CCCCCC,#1A1A27,#5C5C87,#61D0FF,#17161F",
  "Midnight": "#0F0F10,#EEEFF1,#151516,#EEEFF1,#D25E65,#FFFFFF",
  "Dawn": "#2A222E,#EEEFF1,#382A3C,#EEEFF1,#A84376,#FFFFFF",
  "Pale": "#292D3E,#EEEFF1,#292D3E,#EEEFF1,#7D57C1,#FFFFFF",
  "Barbie Dreamhouse": "#E2DAF1,#593E74,#FCDEEE,#593E74,#B8FAFA,#8B6BC7",
  "Ikea": "#FFFF00,#000000,#0000FF,#FFFFFF,#0000FF,#FFFFFF",
  "StarCraft": "#191919,#D8D8D8,#121212,#D8D8D8,#4946DB,#FFFFFF",
  "Scout": "#141616,#FAFAFA,#1C1E1F,#F4F5F7,#003EFF,#FFFFFF",
  "Discord": "#37393E,#DCDDDE,#2F3136,#DCDDDE,#768AD4,#FFFFFF",
};

export default function get(req: NowRequest, res: NowResponse) {
  return res.json(themes);
}
