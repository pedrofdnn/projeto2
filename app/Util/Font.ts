import { Oxygen, Roboto } from "next/font/google";

export const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--Oxygen",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--roboto",
});

export const oxy = oxygen.variable;
export const robot = roboto.variable;
