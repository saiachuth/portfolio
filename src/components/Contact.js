// src/components/Contact.js
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle the form data (e.g., send it to a server)
  };

  return (
    <div>
      <h2 className='text-3xl font-bold mb-4'>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md'>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Your Name'
            name='name'
            ref={register({ required: "Name is required" })}
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Your Email'
            name='email'
            ref={register({ required: "Email is required" })}
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            placeholder='Your Message'
            name='message'
            ref={register({ required: "Message is required" })}
          />
          {errors.message && (
            <p className='text-red-500 text-xs italic'>
              {errors.message.message}
            </p>
          )}
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
