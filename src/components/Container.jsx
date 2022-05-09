import SideBar from './SideBar';
import FindStudyGroup from './FindStudyGroup';
import CreateStudyGroup from './CreateStudyGroup';
import { useState } from 'react'
import '../styles.scss'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import JoinStudyGroup from "./JoinStudyGroup"
import JoinDetail from './JoinDetail';


const App = (params) => (

    <div className="h-100 w-100 d-flex position-absolute">
        <div className="container-fluid bg-primary">
            <div className="h-100 row">
<<<<<<< Updated upstream
                <div className="col sidemenu bg-primary m-0 p-0">
                    <SideBar/>
=======
                <div className="col sidemenu bg-secondary m-0 p-0">
                    <SideBar />
>>>>>>> Stashed changes
                </div>
                <div className="h-100 col bg-secondary p-2">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>)


function Container() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
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