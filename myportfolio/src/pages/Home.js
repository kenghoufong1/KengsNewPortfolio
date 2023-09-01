import React from 'react';
import '../styles/Home.css';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Keng</h2>
        <div className="circle" ></div>
        <div className='prompt'>
          <p>
            A fullstack web developer dedicated to bringing dynamic ideas to life through seamless front-end designs and powerful backend implementation.
          </p>
          <div className='socialMediaHome'>
            <a href="https://www.instagram.com/xkengx/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://github.com/kenghoufong1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon github" />
            </a>
            <a href="https://www.linkedin.com/in/keng-fong-84740726b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="mailto:kenghoufong1@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon email" />
            </a>
          </div>
        </div>
        <div className='skills'>

        </div>
      </div>
    </div>
  )
}

export default Home