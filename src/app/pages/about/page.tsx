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
      <main>
        <table  id="aboutTable">
          <tr>
            <td>
              <h3 className='aboutLabel'>Life</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td className='aboutContent'>
              I am a Japanese-American student at University of South Carolina, and I go by my nickname Ted.
              I was born and raised around Columbia, South Carolina and I've lived here all my life.
              My family often travels, we love Myrtle Beach, Disney, and the Smokey Mountains.
              It used to be just me and my family, but recently as we've gotten older, our friends have been coming with us.
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <h3 className='aboutLabel'>Experience</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td className='aboutContent'>
              Though I am still working on getting work experience, as I have said I'm working on developing my skills with
              various languages, algorithms, and data structures to create more robust and streamlined apps.
              Currently, I'm learning User Interface frameworks such as 
              Qt for my ZipUp app, PyQt6 for my Scheduled-Shutdown app, and React with NextJS for this site.
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <h3 className='aboutLabel'>Ambition</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td className='aboutContent'>
              I'm a very driven person, and at the moment the only thing I'm pursuing is my degree and a career.
              To pair with my CS classes, I'm learning various useful languages and frameworks to be ready to work in the field.
              Currently, I am pursuing an internship before I graduate college to get experience.
              In the future my dream is to be a software developer, to work closely with a team of my peers to design and develop
              both a functional and user-friendly app.
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
};
