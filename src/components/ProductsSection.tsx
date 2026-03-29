import productCream from "@/assets/product-cream.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productEye from "@/assets/product-eye.jpg";

const products = [
  {
    name: "Eye Cream",
    category: "Eye Care",
    price: "€195",
    image: productCream,
    description: "Rejuvenating eye contour cream to smooth and brighten delicate skin",
  },
  {
    name: "Night Renewal Crème",
    category: "Night Care",
    price: "€340",
    image: productSerum,
    description: "Intensive overnight repair cream that restores radiance while you sleep",
  },
  {
    name: "Toner",
    category: "Prep & Balance",
    price: "€120",
    image: productEye,
    description: "Refining toner that purifies and prepares skin for optimal absorption",
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
