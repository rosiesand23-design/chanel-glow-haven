const ingredients = [
  { name: "Camellia Japonica", origin: "Japan", note: "Rare oil prized for centuries by geishas for its silk-like texture and antioxidant power." },
  { name: "24K Gold", origin: "Switzerland", note: "Micro-particles that stimulate collagen synthesis and deliver unparalleled luminosity." },
  { name: "Black Truffle", origin: "Périgord, France", note: "Exceptionally rich in amino acids, offering deep cellular nourishment." },
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Precious Ingredients
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Nature's Finest
          </h2>
        </div>

        <div className="space-y-0">
          {ingredients.map((item, i) => (
            <div
              key={item.name}
              className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 ${
                i < ingredients.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:w-1/3">
                <h3 className="font-display text-2xl text-foreground italic">{item.name}</h3>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mt-1">
                  {item.origin}
                </p>
              </div>
              <p className="md:w-2/3 font-body text-sm text-muted-foreground leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
