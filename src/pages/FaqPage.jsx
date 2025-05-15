
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Is it safe to buy accounts or items from Parnflowers Limited?",
    answer: "Yes, absolutely. We prioritize your security above all. All transactions are conducted through verified communication channels, and we implement strict protocols to ensure the safety and legitimacy of every trade. We act as a secure mediator to protect both buyers and sellers."
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the digital nature of the goods we facilitate, all sales are final once the item (account, currency, skin, etc.) is delivered and confirmed received. Refunds are generally not provided unless there is a verified issue with the delivery or the item significantly differs from its description, as determined by our support team."
  },
  {
    question: "How long does it take to process an order or trade?",
    answer: "Most transactions are completed within 15 to 60 minutes after payment confirmation and necessary verifications. However, processing times can vary depending on the specific game, the complexity of the trade, and the responsiveness of parties involved. We always strive to complete trades as quickly as possible."
  },
  {
    question: "How can I contact support if I have an issue or question?",
    answer: "You can reach our support team through multiple channels. The primary method is by submitting a ticket via the contact form on our 'Contact Us' page. You can also reach us directly via Telegram (ID: Parnflowers) or Email (parnfluk@outlook.com) for urgent matters. We aim to respond to all inquiries promptly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, which will be detailed during the transaction process. We strive to offer convenient and secure payment options. For specific inquiries about payment methods, please contact our support team before initiating a trade."
  },
  {
    question: "What happens if there's a problem with an account I purchased?",
    answer: "We provide a limited warranty period post-purchase for certain types of issues (e.g., account recovery by original owner shortly after sale). The specifics of this warranty depend on the game and item. Please report any problems to our support team immediately. We will investigate and mediate to find a fair resolution."
  },
  {
    question: "Can I sell my game accounts or items through Parnflowers Limited?",
    answer: "Yes, we are a platform for both buying and selling. If you're interested in selling your game accounts or items, please contact us with details about what you wish to sell. We will guide you through our verification and listing process."
  }
];

const FaqPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Frequently Asked <span className="neon-text-primary">Questions</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services, security, and processes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-xl"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-primary text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: faqData.length * 0.1 + 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-muted-foreground">
          Can't find the answer you're looking for?
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/50"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default FaqPage;
  