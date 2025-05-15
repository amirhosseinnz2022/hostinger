
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, MessageSquare, Gamepad } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const heroBgImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e1ea1837-18a9-4085-98fa-817959c745f9/81beaa986df947afcf99365eb1888fc4.png";

const featuredGames = [
  { name: 'Call of Duty', description: 'CP & Accounts', image_prompt: 'Call of Duty modern warfare character aiming down sights in a dynamic pose' },
  { name: 'Valorant', description: 'Skins, VP & Accounts', image_prompt: 'Valorant agent Jett using her ultimate ability with glowing knives' },
  { name: 'CS2', description: 'Skins & Accounts', image_prompt: 'Counter-Strike 2 CT agent aiming a rifle with a neon city background' },
  { name: 'Fortnite', description: 'Skins, V-Bucks & Accounts', image_prompt: 'Fortnite characters dancing on a vibrant, colorful party bus' },
];

const HomePage = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 text-white"
          >
            <span className="block">BUY & SELL GAME</span>
            <span className="block neon-text-primary">ACCOUNTS AND</span>
            <span className="block">IN-GAME ITEMS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            A marketplace for Call of Duty, Valorant, CS2, Fortnite, and more. Securely trade your digital gaming assets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" asChild className="btn-primary-glow px-10 py-6 text-lg font-semibold group">
              <Link to="/games">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
      </section>

      {/* Featured Games Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          GAMES & <span className="neon-text-secondary">ITEMS</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
            >
              <Card className="h-full overflow-hidden bg-card-gradient shadow-lg hover:shadow-card-glow transition-all duration-300 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <img  
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    alt={`${game.name} promotional artwork`}
                   src="https://images.unsplash.com/photo-1511512578047-dfb367046420" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">{game.name}</CardTitle>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                    <Link to={`/games#${game.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="btn-secondary-glow px-8 py-5 text-md group">
            <Link to="/games">
              Explore All Games <Gamepad className="ml-2 h-5 w-5 group-hover:rotate-[15deg] transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card/50" style={{ backgroundImage: `url(${heroBgImageUrl})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          >
            Why <span className="neon-text-primary">Parnflowers</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Secure Transactions', description: 'Verified communication channels and processes ensure your trades are safe.' },
              { icon: Users, title: 'Trusted Platform', description: 'A reliable mediator for gamers worldwide, built on trust and transparency.' },
              { icon: MessageSquare, title: 'Dedicated Support', description: 'Quick and helpful support via multiple channels for any inquiries.' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, boxShadow: "0 0 20px hsl(var(--accent) / 0.4)" }}
              >
                <Card className="text-center p-6 md:p-8 h-full glassmorphism shadow-lg hover:shadow-card-glow transition-shadow duration-300 border border-primary/30">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Snippet Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About <span className="neon-text-secondary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Parnflowers Limited provides a trusted digital trading platform for gamers worldwide. We connect buyers and sellers for secure transactions of game accounts, in-game items, and currencies.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded by Marten Parn, our mission is to create a safe and reliable environment for all your gaming trade needs.
            </p>
            <Button asChild className="group btn-primary-glow">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl shadow-primary/20 group"
          >
            <img  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" alt="Marten Parn, owner of Parnflowers Limited, in a professional setting" src="https://images.unsplash.com/photo-1620562623585-8c4a7dc450de" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-primary/30"></div>
            <div className="absolute bottom-4 left-4 p-2 bg-black/50 rounded">
              <p className="text-lg font-semibold text-white">Marten Parn</p>
              <p className="text-sm text-primary">Owner, Parnflowers Ltd.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Snippet Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          >
            Get In <span className="neon-text-accent">Touch</span>
          </motion.h2>
        <Card className="p-6 md:p-10 shadow-xl shadow-secondary/20 glassmorphism border border-secondary/30">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Contact Form</h3>
              <p className="text-muted-foreground mb-6">
                Have questions or need support? Fill out the form, and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Direct Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Email: <a href="mailto:parnfluk@outlook.com" className="text-primary hover:underline hover:text-brand-accent transition-colors">parnfluk@outlook.com</a></li>
                <li>Telegram: <a href="https://t.me/Parnflowers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-brand-accent transition-colors">Parnflowers</a></li>
                <li>Phone: <span className="text-primary">(+44) 7447649430</span></li>
              </ul>
              <div className="mt-6">
                <Button asChild className="group btn-secondary-glow">
                  <Link to="/contact">
                    More Contact Options <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
  