import { Lobster, Oxygen, Roboto } from "next/font/google";

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
export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--lobster",
});

export const oxy = oxygen.variable;
export const robot = roboto.variable;
export const lobste = lobster.variable;
