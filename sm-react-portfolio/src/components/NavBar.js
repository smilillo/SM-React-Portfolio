import React from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'

export default function NavBar({ currentPage, handlePageChange }) {

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
            <div>
                <h1 className="text-5xl ml-2 font-signature">Sofie</h1>
            </div>
            <ul className="hidden md:flex">
                <li className="px-4 cursor-pointer hover:scale-105 duration-200 nav-item">
                    <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                    Home
                    </a>
                </li>
                <li className="px-4 cursor-pointer hover:scale-105 duration-200 nav-item">
                    <a 
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                    About
                    </a>
                </li>
                <li className="px-4 cursor-pointer hover:scale-105 duration-200 nav-item">
                <a
                href="#Work"
                onClick={() => handlePageChange('Work')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >
                Work
                </a>
                </li>
                <li className="px-4 cursor-pointer hover:scale-105 duration-200 nav-item">Resume</li>
                <li className="px-4 cursor-pointer hover:scale-105 duration-200 nav-item">Contact</li>
            </ul>
        </div>
    )
}
