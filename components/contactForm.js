import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Send the form data to your server or a service like Formspree
    console.log(values);

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-[45%] ml-[26vw] pt-12'>
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

          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;