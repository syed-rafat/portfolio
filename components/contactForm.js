import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Get from EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Get from EmailJS dashboard
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        'YOUR_PUBLIC_KEY' // Get from EmailJS dashboard
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!");
        resetForm();
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to send email. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {/* ... rest of your existing form JSX ... */}
    </Formik>
  );
};

export default ContactForm;