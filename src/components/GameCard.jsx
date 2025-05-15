
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const GameCard = ({ game, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ 
        y: -12, 
        scale: 1.04, 
        boxShadow: "0 0 30px hsl(var(--primary) / 0.6), 0 0 15px hsl(var(--brand-accent) / 0.4)",
        transition: { duration: 0.3, ease: "circOut" }
      }}
      className="h-full group"
      id={game.id}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card-gradient shadow-lg hover:shadow-card-glow transition-all duration-300 border border-transparent group-hover:border-primary/50">
        <div className="relative h-56 w-full overflow-hidden">
          <img   
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110" 
            alt={`${game.name} promotional art`}
           src="https://images.unsplash.com/photo-1668705606819-24f3ba43eefe" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
          <CardHeader className="absolute bottom-0 left-0 w-full p-4 z-10">
            <CardTitle className="text-2xl font-bold text-white drop-shadow-lg group-hover:neon-text-primary transition-colors duration-300">{game.name}</CardTitle>
          </CardHeader>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col bg-card">
          <CardDescription className="text-muted-foreground mb-3 text-sm min-h-[3.5rem]">{game.description}</CardDescription>
          <div className="mb-4 mt-auto">
            <h4 className="text-sm font-semibold text-foreground mb-1">What's Traded:</h4>
            <div className="flex flex-wrap gap-2">
              {game.items.map((item, idx) => (
                <motion.span 
                  key={idx} 
                  className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full group-hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 8px hsl(var(--primary)/0.5)"}}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
          <Button variant="outline" asChild className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-neon-sm transition-all duration-300">
            <Link to={`#${game.id}`}>
              Explore Trades <ShoppingBag className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GameCard;
  