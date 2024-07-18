"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from '@/lib/validation/loginSchema';
import Link from 'next/link';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
const ResetPassword= () => {
    //zod resolver
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const [password, setPassword] = useState<string | any>('');
    const [show, setShow] = useState(true);

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg '>
                <h1 className='text-3xl font-bold mb-6 text-center text-gray-600'>Reset Password</h1>
               
                <form >
                    <div>
                        <label htmlFor="password" className='block text-gray-500 font-medium mb-2 my-2'>Password</label>
                        <div className='relative flex items-center'>
                            <input
                                {...register('password')}
                                type={show ? "text":"password"}
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 pr-10'
                                placeholder='Enter new password'
                            />
                            {
                                show ? <IoEyeOutline onClick={() => setShow(!show)} className='absolute right-3 text-gray-500 cursor-pointer' /> : <FaRegEyeSlash onClick={() => setShow(!show)} className='absolute right-3 text-gray-500 cursor-pointer' />
                            }
                        </div>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    
                    <div className='flex justify-center py-5'>
                        <button
                            
                            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-400'
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;