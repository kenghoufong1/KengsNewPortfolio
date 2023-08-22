import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://www.instagram.com/xkengx/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />
                </a>
                <a href="https://github.com/kenghoufong1" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" />
                </a>
                <a href="https://www.linkedin.com/in/keng-fong-84740726b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" />
                </a>
            </div>
            <p>&copy; 2023 Keng Fong</p>
        </div>
    )
}

export default Footer