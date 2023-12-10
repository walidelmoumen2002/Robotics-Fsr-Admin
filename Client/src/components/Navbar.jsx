import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex flex-col items-center bg-[#2d68ea] w-[13%] h-screen">
            <div className='h-1/6'></div>
            <div className="flex flex-col items-start text-xl">
                <Link to="/Materiels" className="flex items-center text-gray-300 my-8 hover:bg-gray-700 hover:text-white rounded-md  py-2 font-medium"><Icon icon="et:gears" className='mr-5' />Materiels</Link>
                <Link to="/Teams" className="flex items-center text-gray-300 my-8 hover:bg-gray-700 hover:text-white rounded-md  py-2 font-medium"><Icon icon="fluent:people-team-16-regular" className='mr-5' />Equipes</Link>
                <Link to="/Projects" className="flex items-center text-gray-300 my-8 hover:bg-gray-700 hover:text-white rounded-md  py-2 font-medium"><Icon icon="carbon:ibm-cloud-projects" className='mr-5' />Projets</Link>
                <Link to="/Members" className="flex items-center text-gray-300 my-8 hover:bg-gray-700 hover:text-white rounded-md  py-2 font-medium"><Icon icon="ic:outline-remember-me" className='mr-5' />Membres</Link>
                <Link to="/Packs" className="flex items-center text-gray-300 my-8 hover:bg-gray-700 hover:text-white rounded-md  py-2 font-medium"><Icon icon="tabler:package" className='mr-5' />Packs</Link>
            </div>
        </nav>
    )
}

export default Navbar
