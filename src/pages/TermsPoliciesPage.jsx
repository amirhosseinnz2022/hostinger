
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

const SectionWrapper = ({ title, icon: Icon, children, neonClass = "neon-text-primary" }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="mb-12 bg-card p-6 md:p-8 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-6">
      <Icon className={`h-8 w-8 mr-3 ${neonClass.replace('neon-text-', 'text-')}`} />
      <h2 className={`text-2xl md:text-3xl font-display font-semibold ${neonClass}`}>{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground leading-relaxed prose prose-invert max-w-none prose-p:my-2 prose-ul:my-2 prose-headings:my-4 prose-headings:font-display">
      {children}
    </div>
  </motion.section>
);


const TermsPoliciesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Terms & <span className="neon-text-primary">Policies</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read our terms and policies carefully before using our services.
        </p>
      </motion.div>

      <SectionWrapper title="General Terms" icon={FileText} neonClass="neon-text-primary">
        <ul>
          <li>All transactions must be conducted exclusively through Parnflowers Limited's verified communication channels. Any transactions outside these channels are not recognized or supported by us.</li>
          <li>Due to the digital nature of the goods and services provided, all sales are final. No refunds will be issued once digital items (accounts, currency, skins, etc.) are delivered and confirmed received by the buyer.</li>
          <li>Any attempt at fraudulent activity, including but not limited to chargebacks without valid cause, use of stolen payment methods, or misrepresentation of items, will result in an immediate and permanent ban from our platform and services. We may also report such activities to relevant authorities.</li>
          <li>Parnflowers Limited prioritizes your privacy and security. We do not store sensitive personal or payment data unnecessarily. Data required for transactions is handled securely and retained only as long as necessary for support and legal compliance.</li>
          <li>We reserve the right to update these terms and policies at any time without prior notice. It is your responsibility to review them periodically. Continued use of our services after changes constitutes acceptance of the new terms.</li>
          <li>By using any of Parnflowers Limited's services, you explicitly acknowledge that you have read, understood, and agree to be bound by these General Terms, our Privacy Policy, and Trade Disclaimer.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper title="Privacy Policy" icon={Shield} neonClass="neon-text-secondary">
        <ul>
          <li>Your personal data (such as email, transaction history, and communication logs) is collected and used solely for the purpose of providing customer support, facilitating transactions, and improving our services.</li>
          <li>Parnflowers Limited will not share, sell, rent, or trade your personal information with any third parties for their marketing purposes without your explicit consent, unless required by law or for the protection of our rights.</li>
          <li>You have the right to request access to, correction of, or removal of your personal data held by us. To make such a request, please contact us through our official channels. Data removal may be subject to legal and operational retention requirements.</li>
          <li>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper title="Trade Disclaimer" icon={AlertTriangle} neonClass="neon-text-accent">
        <ul>
          <li>Parnflowers Limited acts as a mediator platform connecting buyers and sellers of digital goods. We are not the original issuer, owner, or creator of the game accounts, in-game items, or currencies being traded, unless explicitly stated.</li>
          <li>It is the responsibility of both buyer and seller to thoroughly check all item details, account specifics, and transaction terms before finalizing a deal. Parnflowers Limited facilitates the connection but does not guarantee the condition or specific attributes of items beyond what is verified through our process.</li>
          <li>All game titles, trademarks, and intellectual property related to the items traded belong to their respective owners and developers. Parnflowers Limited is not affiliated with, endorsed by, or sponsored by any of the game developers or publishers.</li>
          <li>Users acknowledge that trading digital game assets may carry risks, including potential actions by game developers against accounts involved in trading, as per their respective End User License Agreements (EULAs). Parnflowers Limited is not liable for any such actions taken by third-party game developers.</li>
        </ul>
      </SectionWrapper>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </motion.div>
    </div>
  );
};

export default TermsPoliciesPage;
  