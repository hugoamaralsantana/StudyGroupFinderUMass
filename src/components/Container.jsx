import SideBar from './SideBar';
import FindStudyGroup from './FindStudyGroup';
import JoinStudyGroup from './JoinStudyGroup';
import CreateStudyGroup from './CreateStudyGroup';
import { useState } from 'react'
import '../styles.scss'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import JoinDetail from './JoinDetail';

const HomePage = () => {
    return (
        <div className="display-1">Try selecting a menu item to begin.</div>
    )
}

function Container() {
    return (
    <div className="h-100 w-100 d-flex position-absolute">
        <div className="container-fluid bg-primary">
            <div className="h-100 row">
                <div className="col sidemenu bg-secondary m-0 p-0">
                    <SideBar />
                </div>
                <div className="h-100 col bg-secondary p-2">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route index element={<CreateStudyGroup />} />
                        <Route path="find" element={<FindStudyGroup />} />
                        <Route path="join" element={<JoinStudyGroup />} /> 
                        <Route path="detail" element={<JoinDetail />} />
                    </Routes>
                </BrowserRouter>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;