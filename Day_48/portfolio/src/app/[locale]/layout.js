import "./globals.css";
import "primeicons/primeicons.css";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
export const metadata = {
  title: "Portfolio",
  description:
    "Hi.This is my portfolio and I hope you will find it interesting",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Portfolio />
      </main>
    </>
  );
}
