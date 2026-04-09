import productCream from "@/assets/product-cream.webp";
import productMoisturizer from "@/assets/product-moisturizer.webp";
import productSerum from "@/assets/product-serum.webp";

const products = [
  {
    name: "Eye Cream",
    category: "Eye Care",
    price: "Price:",
    image: productCream,
    description: "A firming, fatigue-fighting formula designed to smooth and energize the delicate eye area.\n",
  },
  {
    name: "Intense Hyaluronic Moisturizer",
    category: "Hydration",
    price: "Price:",
    image: productMoisturizer,
    description: "A rich, cushiony cream that delivers deep hydration and visible plumpness overnight.\n",
  },
  {
    name: "Collagen & Retinol Serum",
    category: "Serums",
    price: "€120",
    image: productSerum,
    description: "Potent collagen and retinol serum for firmer, more youthful-looking skin",
  },
];

const ProductsSection = () => {
  return (
    <section id="collections" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Our Collections
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Signature Formulas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="overflow-hidden bg-secondary mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                {product.category}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                {product.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                {product.description}
              </p>
              <p className="font-body text-sm tracking-wider text-foreground">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
