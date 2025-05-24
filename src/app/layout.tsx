import type { Metadata } from "next";
import './global.css'
import Nav from "../components/nav/Nav";
import SmoothScrolling from "../components/smoothScroll/SmoothScroll";
import NoiseEffect from "../components/grain/NoiseEffect";
import GlassEffect from "../components/grain/GlassEffect";
import Footer from "../components/footer/footer";
import Loader from "../components/loading/Loading";
import { LayzExperience } from "../components/background/LayzExperience";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "Anasayfa | Visugenius",
  description: "Visugenius, yaratıcı web tasarım, dijital pazarlama ve sosyal medya yönetimi çözümleri sunan modern bir ajanstır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="page-container">
          <SmoothScrolling>
            <Loader />
            <NoiseEffect />
            <LayzExperience/>
            <GlassEffect />
            <Nav />
            <ScrollToTop/>
            <main className="main-content">{children}</main>
            <Footer />
          </SmoothScrolling>
        </div>
      </body>
    </html>
  );
}
