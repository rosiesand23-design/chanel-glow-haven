const Footer = () => {
  return (
    <footer id="about" className="bg-noir py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">Dulcehana</h2>
          <p className="font-body text-sm text-cream/40 max-w-md mx-auto leading-relaxed">
            Founded in Paris, Maison Noire embodies the intersection of science and luxury. Every formulation is a testament to uncompromising excellence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-cream/10 pt-10">
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/30">
            © 2026 Maison Noire. All rights reserved.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0">
            {["Privacy", "Terms", "Contact"].map((link) =>
            <a
              key={link}
              href="#"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/30 hover:text-gold transition-colors duration-300">
              
                {link}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;