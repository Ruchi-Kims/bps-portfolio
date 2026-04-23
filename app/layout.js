import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { Inter, Poppins } from 'next/font/google'

// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})


export const metadata = {
  title: "Portfolio de BITOUKOU PRECIEUX SHELVY",
  description: "Ingénieur en Electricité et Batiments | Concepteur & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main> {children} </main>
        </body>
        <Footer />
    </html>
  );
}
