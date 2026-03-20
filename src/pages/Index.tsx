import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import RitualsSection from "@/components/RitualsSection";
import IngredientsSection from "@/components/IngredientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <RitualsSection />
      <IngredientsSection />
      <Footer />
    </div>
  );
};

export default Index;
