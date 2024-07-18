
import Link from 'next/link';
// import { useState } from 'react';
const NavbarSection = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <nav className='fixed bg-gray-50 w-full h-24  flex justify-between items-center'>
      <div className='w-full h-full flex items-center relative'>
        <div className=" absolute left-10 top-5 gap-3 flex">
          {/* <img src="logo.png" alt="" width={50}/> */}
          <a className='text-[#404040] font-bold text-4xl absolute'>DBIT</a>
          </div>
        <div className=' flex justify-center items-center w-full h-full'>
          <ul className='flex font-semibold justify-center gap-12 items-center'>
            <li className=''>
              <Link href="/">
              Home
              </Link>
            </li>
            <li className=''>
              <Link href="/about">
              About
              </Link>
            </li>
            <li className=''>
              <Link href="/services">
           Services
              </Link>
            </li>
            <li className=''>
              <Link href="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute top-5  right-11">
        <button className='w-20 text-lg h-10 bg-blue-700 text-white rounded-lg shadow-md shadow-blue-900'><Link href="/frontend/login">Login</Link>
        </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
