import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="font-display text-2xl tracking-[0.3em] uppercase text-foreground">
          DULCE HANA
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {["Collections", "Rituals", "Ingredients", "About"].map((item) =>
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            
              {item}
            </a>
          )}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen &&
      <div className="md:hidden bg-background border-b border-border px-6 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {["Collections", "Rituals", "Ingredients", "About"].map((item) =>
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(false)}>
            
                {item}
              </a>
          )}
          </nav>
        </div>
      }
    </header>);

};

export default Header;