import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Mail, Link, GitFork, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { SectionLabel } from './ui/SectionLabel';
import { Button } from './ui/Button';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'your@email.com' },
  { icon: Link, label: 'LinkedIn', value: 'linkedin.com/in/yourname' },
  { icon: GitFork, label: 'GitHub', value: 'github.com/yourname' },
  { icon: MapPin, label: 'Location', value: 'India (Open to Remote)' }
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl font-bold text-white mt-4">Let's Work Together</h2>
          <p className="text-gray-400 mt-4">Open to full-time roles, freelance projects and collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card flex items-center gap-4 p-4 rounded-lg bg-surface"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <info.icon size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{info.label}</div>
                  <div className="text-white">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                />
                {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green text-sm text-center"
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};