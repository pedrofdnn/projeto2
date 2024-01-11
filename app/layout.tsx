import ThemeRegistry from "./Components/ThemeRegistry";
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
      <ThemeRegistry>
        <body className={`${robot} ${oxy} ${lobste}`}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
