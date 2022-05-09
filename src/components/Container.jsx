import SideBar from './SideBar';
import FindStudyGroup from './FindStudyRoom';
import JoinStudyGroup from './JoinStudyGroup';
import CreateStudyGroup from './CreateStudyGroup';
import { useState } from 'react'
import '../styles.scss'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import JoinDetail from './JoinDetail';

const TempPage = () => {
    return (
        <div className="display-1">Try selecting a menu item to begin.</div>
    )
}

const HomePage = () => {
    return (
    <div className="h-100 w-100 d-flex position-absolute">
        <div className="container-fluid bg-primary">
            <div className="h-100 row">
                <div className="col sidemenu bg-primary m-0 p-0">
                    <SideBar />
                </div>
                <div className="h-100 col bg-secondary p-2">
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
    );
}

function Container() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                <Route index element={<CreateStudyGroup />} />
                <Route path="find" element={<FindStudyGroup />} />
                <Route path="join" element={<JoinStudyGroup />} />
                <Route path="detail" element={<JoinDetail />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Container;