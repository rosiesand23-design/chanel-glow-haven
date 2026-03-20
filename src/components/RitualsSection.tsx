const steps = [
  { number: "01", title: "Cleanse", description: "Begin with our micellar water infused with white camellia to gently dissolve impurities." },
  { number: "02", title: "Treat", description: "Apply Sérum Lumière to restore radiance and deliver concentrated active ingredients." },
  { number: "03", title: "Hydrate", description: "Seal in luminosity with Crème Suprême, our signature gold-infused moisturizer." },
  { number: "04", title: "Protect", description: "Complete your ritual with Regard Éternel to safeguard the delicate eye contour." },
];

const RitualsSection = () => {
  return (
    <section id="rituals" className="py-28 md:py-36 bg-noir">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            The Ritual
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            A Daily Ceremony
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="font-display text-5xl text-gold/30 block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl text-cream mb-3 italic">
                {step.title}
              </h3>
              <p className="font-body text-sm text-cream/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualsSection;
