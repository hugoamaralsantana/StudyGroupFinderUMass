import SideBar from './SideBar';
import StudyGroupListPage from './StudyGroupListPage';
import { useState } from 'react';
import '../styles.scss'

function Container(){  
    return(
    <div className="h-100 w-100 d-flex position-absolute">
        <div className="container-fluid bg-secondary">
            <div className="h-100 row">
                    <div className="col sidemenu bg-secondary m-0 p-0 ">
                        <SideBar/>
                    </div>
                <div className="col bg-primary p-1">
                    <StudyGroupListPage/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;