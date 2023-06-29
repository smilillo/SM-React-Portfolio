import React from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

    // const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
            <div>
                <h1 className="text-5xl ml-2 font-signature">Sofie</h1>
            </div>
            <ul className="hidden md:flex">
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">About</li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Work</li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Contact</li>
            </ul>
            {/* <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500">
                <FaBars size={30}/>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div> */}

            {/* <ul className='flex flex-col justify-center items-center absolute top-0 '>
                <li>home</li>
            </ul> */}
        </div>
    )
}

export default NavBar