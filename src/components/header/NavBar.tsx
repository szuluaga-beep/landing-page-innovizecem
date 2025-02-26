"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logoHeader from "../../../public/logoheader.svg"
import "./NavBar.css"
import Link from "next/link"
import { List } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='header-container'>
        <nav className='container-nav'>
          <div className='logo'>
            <Image src={logoHeader} alt="logo" />
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            <List size={24} />
          </div>
          <div className={`items-header ${menuOpen ? 'open' : ''}`}>
            <Link href="#Hero">Home</Link>
            <Link href="#About">About Us</Link>
            <Link href="#solutions">Solutions</Link>
            <Link href="#Portfolio">Portfolio</Link>
            <Link href="#Contact">Contact Us</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar