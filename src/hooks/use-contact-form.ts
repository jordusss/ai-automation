import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData: FormData) => {
    setIsSubmitting(true);
    
    const contactData: ContactFormData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    console.log('Submitting form data:', contactData);

    try {
      const { error } = await supabase
        .from('contact_form')
        .insert(contactData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for getting in touch. We'll get back to you soon.",
      });

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm,
  };
};