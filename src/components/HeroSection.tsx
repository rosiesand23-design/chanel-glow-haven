import heroImage from "@/assets/hero-skincare.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury skincare collection on black marble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-noir/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-light mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          The Art of Skincare
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-cream leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Timeless
          <span className="block italic text-gold-light">Elegance</span>
        </h1>
        <p className="font-body text-sm md:text-base text-cream/70 tracking-wide leading-relaxed mb-10 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
          Discover our curated collection of rare botanicals and precious ingredients, crafted for those who demand nothing less than perfection.
        </p>
        <a
          href="#collections"
          className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-gold text-gold px-10 py-4 hover:bg-gold hover:text-accent-foreground transition-all duration-500 animate-fade-in-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
