import SideBar from './SideBar';
import FindStudyGroup from './FindStudyGroup';
import CreateStudyGroup from './CreateStudyGroup';
import { useState } from 'react'
import '../styles.scss'

function Container(){
    return(
    <div className="h-100 w-100 d-flex position-absolute">
        <div className="container-fluid bg-primary">
            <div className="h-100 row">
                <div className="col sidemenu bg-secondary m-0 p-0">
                    <SideBar/>
                </div>
                <div className="h-100 col bg-secondary p-2">
                    <CreateStudyGroup/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;