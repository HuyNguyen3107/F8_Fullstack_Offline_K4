import "../[locale]/globals.css";
import "primeicons/primeicons.css";
import Providers from "@/redux/Providers";

export const metadata = {
  title: "Portfolio",
  description:
    "Hi.This is my portfolio and I hope you will find it interesting",
};

export default function PageLayout({ children, params: { locale } }) {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
}
