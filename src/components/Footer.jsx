
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e1ea1837-18a9-4085-98fa-817959c745f9/0c4c3dbbca28a43f1e919ccd1b8227ca.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyInfo = {
    name: "Parnflowers Limited",
    email: "parnfluk@outlook.com",
    phone: "(+44) 7447649430",
    address: "PB 4385, 15861881, Cardiff, CF14 8LH, UK",
    telegram: "Parnflowers"
  };

  return (
    <footer className="bg-card text-card-foreground py-12 mt-16 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logoUrl} alt="Parnflowers Limited Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted digital trading platform for gamers worldwide. Secure transactions for accounts, items, and currencies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="hover:text-primary transition-colors">Games & Items</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/policies" className="hover:text-primary transition-colors">Terms & Policies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-display">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors">{companyInfo.email}</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{companyInfo.phone}</a>
              </li>
              <li className="flex items-start">
                <Send className="h-5 w-5 mr-3 mt-0.5 text-primary shrink-0" />
                <a href={`https://t.me/${companyInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram: {companyInfo.telegram}</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-display">Newsletter (Future)</h3>
            <p className="text-sm text-muted-foreground mb-3">Stay updated with our latest offers and game additions.</p>
            <form className="flex space-x-2">
              <input type="email" placeholder="Your email" className="flex-grow p-2 rounded-md bg-input border-border focus:ring-primary focus:border-primary text-sm" />
              <Button type="submit" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
          <p className="mt-1">Designed with <span className="text-primary">&hearts;</span> by Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  