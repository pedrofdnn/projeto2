import ThemeRegistry from "./Components/ThemeRegistry";
import { lobste, oxy, robot } from "./Util/Font";
import "./globals.css";

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
    <html lang="pt-br">
      <ThemeRegistry>
        <body className={`${robot} ${oxy} ${lobste} `}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
