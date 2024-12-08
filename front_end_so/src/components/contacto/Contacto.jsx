import React from 'react';
import ContactForm from './FormularioContacto';

const Contact = () => {
  return (
    <main className="py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Contáctanos</h1>
      <ContactForm />
    </main>
  );
};

export default Contact;
