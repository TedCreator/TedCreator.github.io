import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import gitIcon from '../../assets/media/GithubLogo.png'
import homeIcon from '../../assets/media/home.png'

export const metadata: Metadata = {
  title: 'TedCreator::About',
  description: 'This page gives information about me and various parts of my life: privately, professionally and academically.',
}

export default function About() {
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
        <div className="iconLink">
          <Link href="https://www.github.com/TedCreator" target='_blank' rel='noopener noreferrer'>
            <Image src={gitIcon} height={40} width={40} alt="GitHub Logo Icon" />
          </Link>
        </div>
      </header>
      <main >
        About me:

      </main>
    </div>
  );
};
