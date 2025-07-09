'use client'
import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { useCartContext } from '../Context/CartContext';

const ContactUs = () => {

  const messageSuccess = () => toast("Message sent successfully! We will respond to you as soon  as quickly as we can")

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={async(values, { resetForm }) => {
          try{
            const dataSubmit = await fetch('https://formspree.io/f/movwopbq', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values)
            })
            if(dataSubmit.ok){
              messageSuccess()
              resetForm()
            }else{
              toast.error("Something Went Wrong!")
            }
          }catch(err){
            console.log(err)
            toast.error("Form Submitting error")
          }
          console.log("Values>>", values)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter Your Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter Your E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter Your Message."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
        <ToastContainer />
    </div>
  );
};

export default ContactUs;
