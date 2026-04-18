import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ManualPage } from "./pages/ManualPage";
import { FaqPage } from "./pages/FaqPage";
import { ReleasesPage } from "./pages/ReleasesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/releases" element={<ReleasesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
