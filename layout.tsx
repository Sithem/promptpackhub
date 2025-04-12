import "./globals.css";

export const metadata = {
  title: "PromptPackHub",
  description: "Gotowe zestawy promptów do AI — zarabiaj mądrze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
