import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d2926e5b-dd78-400f-b05e-3f126e97285f.png" 
              alt="AutomatizaÍ Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-gradient">AutomatizaÍ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('produtos')}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              Experimente o Cofrin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <Button 
                onClick={() => scrollToSection('produtos')}
                className="w-full bg-primary hover:bg-primary/90 transition-colors"
              >
                Experimente o Cofrin
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;