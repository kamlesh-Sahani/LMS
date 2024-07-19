
// "use client";
// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { loginSchema, LoginSchema } from '@/lib/validation/loginSchema';
// import Link from 'next/link';
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegEyeSlash, FaUser } from "react-icons/fa";
// import { zodResolver } from '@hookform/resolvers/zod';


// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginSchema>({
//     resolver: zodResolver(loginSchema),
//   });

//   const [show, setShow] = useState(false);
//   const [serverError, setServerError] = useState<string | null>(null);

//   const onSubmit: SubmitHandler<LoginSchema> = async ({username, password}) => {
//     try {
//       const response = await fetch('http://localhost:3000/api/users/userData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log('Login successful');
//         // Handle successful login (e.g., redirect, store token, etc.)
//       } else {
//         setServerError(result.error || 'Login failed');
//       }
//     } catch (error: any) {
//       setServerError('Something went wrong');
//     }
//   };

//   return (
//     <div className='bg-gray-100 w-full absolute'>
//          <div className="max-w-2xl mx-auto text-center  mt-12">
//                 <h1 className="px-6 text-2xl text-gray-600 font-inter sm:1xl">DON BOSCO INSTITUTE OF TECHNOLOGY</h1>
//                 <p className="font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj mt-12">
//                    Welcome To Leave Management System                   
//                 </p>              
//             </div>
//     <div className='flex items-center flex-col justify-center mt-16'>
//         {/* </div>      */}
//       <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
//         <div className='flex items-center justify-center mb-6'>
//           <FaUser className='text-3xl text-gray-600 mr-2' />
//           <h1 className='text-3xl font-bold text-center'>Login</h1>
//         </div>
//         <div className='flex justify-center items-center mb-3'>
//           <p className='text-2xl text-gray-500'>Welcome Back</p>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         {/* <form action=""> */}
//           <div>
//             <label htmlFor="username" className='block text-gray-500 font-medium mb-2'>Username</label>
//             <input
//               {...register('username')}
//               type="text"
//               id="username"
//               className='w-full border-gray-300 rounded-md border-2 focus:border-blue-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-gray-600'
//               placeholder='employee123'
//             />
//             {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="password" className='block text-gray-500 font-medium mb-2 my-2'>Password</label>
//             <div className='relative flex items-center'>
//               <input
//                 {...register('password')}
//                 type={show ? "text" : "password"}
//                 id="password"
//                 className='w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 pr-10'
//                 placeholder='Enter your password'
//               />
//               {show ? (
//                 <FaRegEyeSlash onClick={() => setShow(!show)} className='absolute right-3 text-gray-500 cursor-pointer' />
//               ) : (
//                 <IoEyeOutline onClick={() => setShow(!show)} className='absolute right-3 text-gray-500 cursor-pointer' />
//               )}
//             </div>
//             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
//           </div>
//           <div className='flex justify-center py-5'>
//             <button
//               type='submit'
//               className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-400'
//             >
//               Login now
//             </button>
//           </div>
//           {serverError && <p className='text-red-500 text-center'>{serverError}</p>}
//           <div className='flex justify-center py-0'>
//             <p className="text-sm text-gray-600 p-1 text-center">
//               <Link href="/frontend/forgot-password" className='text-blue-500 hover:text-indigo-600 transition duration-300 ease-in-out'>Forgot Password?</Link>
//             </p>
//           </div>
//           {/* <div className='flex justify-center py-0'>
//             <p className="text-sm text-gray-500 p-1 text-center">
//               Login For Users? <Link href="/userLogin" className='text-blue-500 hover:text-indigo-600 transition duration-300 ease-in-out'>Users</Link>
//             </p>
//           </div> */}
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;
// "use client";
// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { loginSchema, LoginSchema } from '@/lib/validation/loginSchema';
// import Link from 'next/link';
// import { IoEyeOutline } from "react-icons/io5";
// import { FaRegEyeSlash, FaUser } from "react-icons/fa";
// import { zodResolver } from '@hookform/resolvers/zod';

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginSchema>({
//     resolver: zodResolver(loginSchema),
//   });

//   const [show, setShow] = useState(false);
//   const [serverError, setServerError] = useState<string | null>(null);

//   const onSubmit: SubmitHandler<LoginSchema> = async ({ username, password }) => {
//     try {
//       const response = await fetch('http://localhost:3000/api/users/userData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log('Login successful');
//         // Handle successful login (e.g., redirect, store token, etc.)
//       } else {
//         setServerError(result.error || 'Login failed');
//       }
//     } catch (error: any) {
//       setServerError('Something went wrong');
//     }
//   };

//   return (
//     <div className='bg-gradient-to-br from-purple-100 gap-12 to-blue-200 min-h-screen flex items-center justify-center'>
//       <div className='text-center mb-12'>
//         <h1 className="text-3xl text-gray-700 font-bold">DON BOSCO INSTITUTE OF TECHNOLOGY</h1>
//         <p className="text-4xl text-gray-900 font-extrabold mt-8">Welcome To Leave </p>
//         <p className="text-4xl text-gray-900 font-extrabold mt-4">Management System</p>
//       </div>
//       <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-xl'>
//         <div className='flex items-center justify-center mb-6'>
//           <FaUser className='text-4xl text-gray-700 mr-3' />
//           <h1 className='text-4xl font-extrabold text-gray-800'>Login</h1>
//         </div>
//         <p className='text-xl text-gray-600 text-center mb-4'>Welcome Back</p>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="username" className='block text-gray-600 font-medium mb-2'>Username</label>
//             <input
//               {...register('username')}
//               type="text"
//               id="username"
//               className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder='employee123'
//             />
//             {errors.username && <p className='text-red-500 mt-1'>{errors.username.message}</p>}
//           </div>
//           <div className='mt-4'>
//             <label htmlFor="password" className='block text-gray-600 font-medium mb-2'>Password</label>
//             <div className='relative'>
//               <input
//                 {...register('password')}
//                 type={show ? "text" : "password"}
//                 id="password"
//                 className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
//                 placeholder='Enter your password'
//               />
//               {show ? (
//                 <FaRegEyeSlash onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
//               ) : (
//                 <IoEyeOutline onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
//               )}
//             </div>
//             {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
//           </div>
//           <button
//             type='submit'
//             className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300'
//           >
//             Login now
//           </button>
//           {serverError && <p className='text-red-500 text-center mt-4'>{serverError}</p>}
//           <div className='flex justify-center mt-4'>
//             <Link href="/frontend/forgot-password">
//               <p className='text-sm text-blue-500 hover:text-blue-600 transition duration-300'>Forgot Password?</p>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/validation/loginSchema';
import Link from 'next/link';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaUser } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [show, setShow] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginSchema> = async ({ username, password }) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Login successful');
        // Handle successful login (e.g., redirect, store token, etc.)
      } else {
        setServerError(result.error || 'Login failed');
      }
    } catch (error: any) {
      setServerError('Something went wrong');
    }
  };

  return (
    <div className='bg-gradient-to-br h-screen w-full from-purple-100 to-blue-200 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8'>
      <div className='text-center mb-12'>
        <h1 className="text-3xl text-gray-700 sm:text-5xl font-bold">DON BOSCO INSTITUTE OF TECHNOLOGY</h1>
        <p className="text-4xl sm:3xl text-gray-700 font-extrabold mt-8">Welcome To Leave Management System</p>
      </div>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-xl'>
        <div className='flex items-center justify-center mb-6'>
          <FaUser className='text-4xl text-gray-700 mr-3' />
          <h1 className='text-4xl font-extrabold text-gray-800'>Login</h1>
        </div>
        <p className='text-xl text-gray-600 text-center mb-4'>Welcome Back</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className='block text-gray-600 font-medium mb-2'>Username</label>
            <input
              {...register('username')}
              type="text"
              id="username"
              className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              placeholder='employee123'
            />
            {errors.username && <p className='text-red-500 mt-1'>{errors.username.message}</p>}
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='block text-gray-600 font-medium mb-2'>Password</label>
            <div className='relative'>
              <input
                {...register('password')}
                type={show ? "text" : "password"}
                id="password"
                className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder='Enter your password'
              />
              {show ? (
                <FaRegEyeSlash onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
              ) : (
                <IoEyeOutline onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
              )}
            </div>
            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
          </div>
          <button
            type='submit'
            className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300'
          >
            Login now
          </button>
          {serverError && <p className='text-red-500 text-center mt-4'>{serverError}</p>}
          <div className='flex justify-center mt-4'>
            <Link href="/frontend/forgot-password">
              <p className='text-sm text-blue-500 hover:text-blue-600 transition duration-300'>Forgot Password?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
