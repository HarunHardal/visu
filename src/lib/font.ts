import { Prata } from "next/font/google";
import { Italiana } from "next/font/google";
import { Redressed } from "next/font/google";
import { Karla } from "next/font/google";
import { Montserrat } from "next/font/google";

export const prata = Prata({
  subsets: ["latin"],
  weight:["400"],
  display: "swap",
});

export const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const redressed = Redressed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const karla = Karla({
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400"],
  display: "swap",
});