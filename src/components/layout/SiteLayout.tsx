import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{
        /* semantic container spacing is set per section for full-width visuals */
      }
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
