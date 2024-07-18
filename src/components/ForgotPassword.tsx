"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { loginSchema , LoginSchema} from '@/lib/validation/loginSchema';
const ForgotPassword = () => {
    //zod resolver
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm<LoginSchema>({
    //     resolver: zodResolver(loginSchema),
    // });
    const handleLoginSubmit = () => {
        console.log(email)
    }
    const [email, setEmail] = useState<string | any>('');
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold mb-6 text-center text-gray-600'>Email Verification</h1>
               
                <form >
                    <div>
                        <div className='flex justify-center items-center'>
                        <label htmlFor="password" className='block text-gray-500 text-3xl text-center font-medium mb-2 my-2'><MdEmail />
                        </label>
                        </div>
                        <div className='relative flex items-center'>
                            <input
                                // {...register('password')}
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 pr-10'
                                placeholder='saadmehmood@gmail.com'
                            />
                          
                        </div>
                        {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}
                    </div>
                    
                    <div className='flex justify-center py-5'>
                        <button
                            onClick={handleLoginSubmit}
                            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-400'
                        >
                            GET OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
