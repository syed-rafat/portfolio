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
        'service_h99olfl', // Get from EmailJS dashboard
        'template_cl3vj84', // Get from EmailJS dashboard
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        '78tllo3i1Ib11mUxV' // Get from EmailJS dashboard
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
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-[45%] mx-auto pt-12 sm:w-[80%] max-w-[26rem] sm:ml-[10vw]'>
          {formSuccess && <p>Your message was sent successfully!</p>}
          <Toaster />
            <h1 className='text-4xl text-center'>Contact</h1>
            <label className='text-2xl text-text py-8'>Name</label>
          <Field type="text" name="name" placeholder="Name" className="rounded p-2 text-mainbg w-full"/>
          <ErrorMessage name="name" component="div" className='text-yellow-300 text-base'/>

            <label className='text-2xl text-text py-8'>Email</label>
          <Field type="email" name="email" placeholder="Email" className="rounded p-2 text-mainbg w-full"/>
          <ErrorMessage name="email" component="div" className='text-yellow-300 text-base'/>

            <label className='text-2xl py-8 text-text'>Message</label>
          <Field as="textarea" name="message" placeholder="Message" className="rounded p-2 text-mainbg w-full"/>
          <ErrorMessage name="message" component="div" className='text-yellow-300 text-base'/>

          <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-2 px-3 rounded-xl mt-12">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;