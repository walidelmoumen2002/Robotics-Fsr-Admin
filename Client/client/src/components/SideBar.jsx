import React from 'react'

function SideBar() {

    return (
        <div className='flex flex-col w-[13%] bg-white shadow-sm h-[90vh]'>
            <div className='flex flex-col h-full'>
                <button to="/Materiels" className="flex justify-center items-center text-gray-300 h-1/6 rounded-md font-medium w-full">Boards</button>
                <button to="/Teams" className="flex justify-center items-center text-gray-300 h-1/6 rounded-md font-medium">Sensors</button>
                <button to="/Projects" className="flex justify-center items-center text-gray-300 h-1/6 rounded-md font-medium">Modules</button>
                <button to="/Members" className="flex justify-center items-center text-gray-300 h-1/6 rounded-md font-medium">Electronics</button>
                <button to="/Packs" className="flex justify-center items-center text-gray-300 h-1/6 rounded-md font-medium">Energies</button>
                <button to="/Packs" className="flex justify-center items-center text-gray-300 h-1/6  rounded-md font-medium">Shields</button>
            </div>
            <div className='h-1/4'></div>
        </div>
    )
}

export default SideBar
