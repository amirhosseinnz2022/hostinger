
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Globe, Target } from 'lucide-react';

const AboutUsPage = () => {
  const companyInfo = {
    name: "Parnflowers Limited",
    owner: "Marten Parn",
    email: "parnfluk@outlook.com",
    phone: "(+44) 7447649430",
    address: "PB 4385, 15861881, Cardiff, CF14 8LH, UK",
    mission: "To provide a secure, transparent, and user-friendly platform for gamers to trade digital assets worldwide, fostering a community built on trust and a shared passion for gaming."
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          About <span className="neon-text-primary">Parnflowers Limited</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your premier destination for secure and reliable digital trading in the gaming world.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
            Our <span className="neon-text-secondary">Story</span>
          </h2>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            Parnflowers Limited was founded by <strong className="text-foreground font-medium">{companyInfo.owner}</strong> with a simple vision: to create a trustworthy and efficient marketplace for gamers. We understand the value of digital assets and the need for a secure platform to trade them.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We connect passionate gamers from all corners of the globe, facilitating the buying and selling of game accounts, in-game items, and virtual currencies across a multitude of popular titles. Our commitment is to ensure every transaction is smooth, secure, and satisfactory.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-xl shadow-primary/30"
        >
          <img  className="w-full h-full object-cover" alt="Abstract gaming world concept" src="https://images.unsplash.com/photo-1672888435314-e9b3564cfed0" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-12 md:mb-16 bg-card p-8 md:p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-display font-semibold text-center text-foreground mb-8">
          Our <span className="neon-text-accent">Mission</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <Target className="h-20 w-20 text-accent mb-6 md:mb-0 md:mr-8 shrink-0" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {companyInfo.mission}
          </p>
        </div>
      </motion.div>

      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-display font-semibold text-center text-foreground mb-10">
          Why <span className="neon-text-primary">Choose Us?</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Security First", description: "We prioritize your safety with verified communication and secure transaction protocols." },
            { icon: Globe, title: "Global Reach", description: "Connecting buyers and sellers from around the world, expanding your trading opportunities." },
            { icon: Users, title: "Community Focused", description: "Built by gamers, for gamers. We understand your needs and strive to exceed expectations." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                 <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-card p-8 md:p-10 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
          Meet the <span className="neon-text-secondary">Founder</span>
        </h2>
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary mb-4 shadow-lg">
            <img  className="w-full h-full object-cover" alt="Marten Parn, Owner" src="https://images.unsplash.com/photo-1599856413870-40540dd55110" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{companyInfo.owner}</h3>
          <p className="text-primary mb-4">Owner & Visionary</p>
          <p className="text-muted-foreground">
            "As a lifelong gamer, I founded Parnflowers Limited to create the kind of trading platform I always wished existed – one that's secure, fair, and truly understands the gaming community."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
  