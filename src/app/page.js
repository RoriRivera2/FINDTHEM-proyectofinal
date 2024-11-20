import "./globals.css";
import Header from "../componentes/Header";
import DonacionButon from "../componentes/DonacionBoton";
import PrimeraSeccion from "../componentes/PrimeraSeccion";
import CarruselPublicaciones from "../componentes/CarruselPublicaciones";
import SocialButtons from "../componentes/SocialButtons";
import UltimasNoticias from "../componentes/UltimasNoticias";
import Footer from "../componentes/Footer";
import Nosotros from "@/componentes/Nosotros/page";
import Navbar from "@/componentes/Navbar/page";
import Image from "next/image";
import PNavbar from "@/componentes/Pruebas/page";

// PALETA DE COLORES
// #215adc
// #1c31a5
// #010937

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nosotros />
      <Navbar />
      <CarruselPublicaciones />
      {/*<Header />
      <DonacionButon/>
      <SocialButtons/>
      
      
      <PrimeraSeccion/>
      <UltimasNoticias/>      
      <Footer/> */}
    </main>
  );
}
