"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logoHeader from "../../../public/assets/logo-header.webp"
import "./NavBar.css"
import Link from "next/link"
import { List } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

interface LanguageSelectorProps {
  locales: string[];
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({ locales }) => {

  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleChange = (event: any) => {
    const newLocale = event.target.value;
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    
    router.push(newPathname);  };
  return (
    <select value={currentLocale} onChange={handleChange} aria-label="Select language" className='select-language'>
      <option key="es" value="es">Spanish</option>
      <option key="en" value="en">English</option>
    </select>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navbar');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header-container">
        <nav className="container-nav">
          <div className="logo">
            <Image src={logoHeader} alt="logo" loading='lazy' width={160} height={60}/>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <List size={24} />
          </div>
          <div className={`items-header ${menuOpen ? "open" : ""}`}>
            <Link href="#Hero">{t("Home")}</Link>
            <Link href="#About">{t("About")}</Link>
            <Link href="#solutions">{t("Solutions")}</Link>
            <Link href="#Portfolio">{t("Portfolio")}</Link>
            <Link href="#Contact">{t("Contact")}</Link>
            <LanguageSelector locales={[]} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
