import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import gitIcon from '../../assets/media/GithubLogo.png'
import homeIcon from '../../assets/media/home.png'

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
      <main>
        <h1>These are my current Projects: </h1><br/>
        <table id='projectTable' border={1}>
          <tr><td>ZipUp</td><td>This Website</td><td>Scheduled Shutdown</td></tr>
        </table>
      </main>
    </div>
  );
};
