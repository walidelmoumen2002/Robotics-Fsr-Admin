import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import Navbar from './components/Navbar';
import Materiels from './pages/Materiel/Ui';
import Packs from './pages/Packs';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Members from './pages/Members';
import Login from './pages/Login';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className='flex'>
                    <Navbar />
                    <div className='flex flex-col bg-gray-100 w-full'>
                        <Topbar />
                        <div className='flex w-full'>
                            <SideBar />
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/Materiels" element={<Materiels />} />
                                <Route path="/Members" element={<Members />} />
                                <Route path="/Packs" element={<Packs />} />
                                <Route path="/Projects" element={<Projects />} />
                                <Route path="/Teams" element={<Teams />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
