import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import gitIcon from './assets/media/GithubLogo.png'
import homeIcon from './assets/media/home.png'
 
export const metadata: Metadata = {
  title: 'TedCreator::Home',
  description: 'Home page of my website.',
}

export default function Home() {
  return (
    <div>
      <header>
        <Link href="/" className='iconLink'>
          <Image src={homeIcon} height={40} width={40} alt="Home Icon" />
        </Link>
        <nav>
          <Link href="/pages/resume" className='pageLink'>
            Resume
          </Link>
          <Link href="/pages/projects" className='pageLink'>
            Projects
          </Link>
          <Link href="/pages/about" className='pageLink'>
            About
          </Link>
        </nav>
        <div className='iconLink'>
          <Link href="https://www.github.com/TedCreator" target='_blank' rel='noopener noreferrer'>
            <Image src={gitIcon} height={40} width={40} alt="GitHub Logo Icon" />
          </Link>
        </div>
      </header>
      <main>
        <h1>Welcome to my Home Page!</h1>
        <br/>
        <h3>On this site you will find an overview of my academic, professional and personal endeavours in software development.</h3>
      </main>
      <footer>
        <h1>Under Development.</h1>
      </footer>
    </div>
  );
};
