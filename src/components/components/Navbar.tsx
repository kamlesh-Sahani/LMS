'use client'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const path = usePathname()
  return (
    <div className='sm:hidden flex '>
    <MenuIcon/>    
    <h1>{path==='/user'}</h1>
    </div>
  )
}

export default Navbar