import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Products from '@/components/Products';
import Partnership from '@/components/Partnership';
import FAQ from '@/components/FAQ';
import Affiliate from '@/components/Affiliate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Partnership />
        <FAQ />
        <Affiliate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
