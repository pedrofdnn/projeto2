import { Roboto } from "next/font/google";
import "./globals.css";
import { lobste, oxy, robot } from "./Util/Font";

export const metadata = {
  title: "Loca Filmes",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${robot} ${oxy} ${lobste}`}>{children}</body>
    </html>
  );
}
