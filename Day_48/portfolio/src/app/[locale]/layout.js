import "./globals.css";
import "primeicons/primeicons.css";
import Providers from "@/redux/Providers";

export const metadata = {
  title: "Portfolio",
  description:
    "Hi.This is my portfolio and I hope you will find it interesting",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
