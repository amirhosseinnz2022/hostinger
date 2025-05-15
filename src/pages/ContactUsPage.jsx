
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, Send as TelegramIcon, MapPin, Instagram, Clock } from 'lucide-react';

const ContactUsPage = () => {
  const contactDetails = {
    email: "parnfluk@outlook.com",
    phone: "(+44) 7447649430",
    telegram: "Parnflowers",
    address: "PB 4385, 15861881, Cardiff, CF14 8LH, UK",
    instagram: "ParnflowersOfficial (Future)"
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    { icon: Phone, label: "Phone", value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s+/g, '')}` },
    { icon: TelegramIcon, label: "Telegram", value: contactDetails.telegram, href: `https://t.me/${contactDetails.telegram}`, target: "_blank" },
    { icon: Instagram, label: "Instagram", value: contactDetails.instagram, href: "#", note: "(Coming Soon)" }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Contact <span className="neon-text-primary">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help! Reach out through our ticket system or direct contact methods.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-card p-6 md:p-8 rounded-lg shadow-xl shadow-primary/20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            Submit a <span className="neon-text-secondary">Ticket</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            For support requests, inquiries, or feedback, please use our contact form. We aim to respond promptly.
          </p>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Direct <span className="neon-text-accent">Channels</span>
            </h2>
            <div className="space-y-5">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <method.icon className={`h-7 w-7 mr-4 mt-1 text-accent ${method.label === "Instagram" ? 'opacity-50' : ''}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{method.label}</h3>
                    {method.href && method.href !== "#" ? (
                       <a href={method.href} target={method.target || '_self'} rel="noopener noreferrer" className="text-primary hover:underline break-all">
                         {method.value}
                       </a>
                    ) : (
                      <span className={`${method.label === "Instagram" ? 'text-muted-foreground opacity-70' : 'text-primary'}`}>{method.value}</span>
                    )}
                    {method.note && <span className="text-xs text-muted-foreground ml-1">{method.note}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: contactMethods.length * 0.1 }}
            className="p-4 bg-card rounded-lg shadow-md"
          >
             <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-accent" /> Physical Address
             </h3>
             <p className="text-muted-foreground">{contactDetails.address}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (contactMethods.length + 1) * 0.1 }}
            className="p-4 bg-card rounded-lg shadow-md"
          >
             <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-accent" /> Business Hours
             </h3>
             <p className="text-muted-foreground">Support available: Monday - Friday, 9:00 AM - 6:00 PM (UK Time)</p>
             <p className="text-sm text-muted-foreground">Ticket system available 24/7.</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;
  