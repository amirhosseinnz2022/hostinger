
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log("Form data:", data);

    // Simulate API call / saving to localStorage
    setTimeout(() => {
      try {
        const tickets = JSON.parse(localStorage.getItem('contactTickets') || '[]');
        tickets.push({ ...data, id: Date.now(), status: 'open' });
        localStorage.setItem('contactTickets', JSON.stringify(tickets));
        
        toast({
          title: "Message Sent!",
          description: "Your ticket has been submitted. We'll get back to you soon.",
          variant: "default",
        });
        reset();
      } catch (error) {
        toast({
          title: "Submission Error",
          description: "Could not save your message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div variants={inputVariants} custom={0}>
        <Label htmlFor="name" className="text-foreground">Your Name</Label>
        <Input id="name" {...register("name")} placeholder="e.g. Alex Smith" className="mt-1 bg-input border-border/70 focus:border-primary" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </motion.div>

      <motion.div variants={inputVariants} custom={1}>
        <Label htmlFor="email" className="text-foreground">Your Email</Label>
        <Input id="email" type="email" {...register("email")} placeholder="e.g. alex@example.com" className="mt-1 bg-input border-border/70 focus:border-primary" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </motion.div>

      <motion.div variants={inputVariants} custom={2}>
        <Label htmlFor="subject" className="text-foreground">Subject</Label>
        <Input id="subject" {...register("subject")} placeholder="e.g. Account Purchase Inquiry" className="mt-1 bg-input border-border/70 focus:border-primary" />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
      </motion.div>

      <motion.div variants={inputVariants} custom={3}>
        <Label htmlFor="message" className="text-foreground">Message</Label>
        <Textarea id="message" {...register("message")} placeholder="Your detailed message or question..." rows={5} className="mt-1 bg-input border-border/70 focus:border-primary" />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </motion.div>

      <motion.div variants={inputVariants} custom={4}>
        <Button type="submit" disabled={isSubmitting} className="w-full btn-primary-glow group">
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.div>
      <p className="text-xs text-muted-foreground text-center mt-2">This form simulates a ticket system. Data is saved locally.</p>
    </motion.form>
  );
};

export default ContactForm;
  