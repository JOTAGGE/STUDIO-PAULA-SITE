import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloating from "./components/layout/WhatsAppFloating";

import HomePage from "./pages/HomePage";
import SobrePage from "./pages/SobrePage";
import ServicosPage from "./pages/ServicosPage";
import GaleriaPage from "./pages/GaleriaPage";
import AgendamentoPage from "./pages/AgendamentoPage";
import ContatoPage from "./pages/ContatoPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#e9e6dd]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/agendamento" element={<AgendamentoPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}
