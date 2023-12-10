import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMateriels } from './fetcher'

function Materiels() {
    const { isLoading, error, data } = useQuery({ queryKey: ['materiels'], queryFn: getMateriels })

    return (
        <div className='flex flex-col w-full justify-start items-start'>
            {/* <div className='h-1/4'></div> */}
            <div className="w-full flex justify-start mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-700">Matériels ({data?.length})</h1>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className="flex flex-col font-bold w-11/12 text-center tracking-tight">
                    <div className='flex items-center justify-end text-gray-400 text-base h-20 w-full'>
                        <div className='flex justify-center w-full'>Composant</div>
                        <div className='flex justify-center w-full'>Quantité Totale</div>
                        <div className='flex justify-center w-full'>Quantité utilisée</div>
                        <div className='flex justify-center w-full'>Quantité en réserve</div>
                        <div className='flex justify-center w-full'>Action</div>
                    </div>
                    {
                        data?.map((materiel, id) => {
                            return (
                                <div key={id} className='flex items-center justify-center bg-white h-28 text-center w-full border-gray-100 shadow-md mb-3 rounded-lg'>
                                    <div className='flex items-center justify-center w-full h-full'>
                                        <div className="flex space-x-3 justify-center ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/arduino-uno-r3.jpeg" alt="materiel photo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{materiel.name}</div>
                                                <div className="text-sm opacity-50">{materiel.type}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center w-full h-full'>{materiel.quantity + materiel.instock}</div>
                                    <div className='flex items-center justify-center w-full h-full'>{materiel.quantity}</div>
                                    <div className='flex items-center justify-center w-full h-full' >{materiel.instock}</div>
                                    <div className='flex items-center justify-center w-full h-full'><button className="btn border-none bg-[#2d68ea] text-white shadow-md">Modifier</button></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Materiels
