import SideBar from './SideBar';
import StudyGroupListPage from './StudyGroupListPage';
import { useState } from 'react';
import '../styles.scss'

function Container(){
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        if(!sidebar){
            setSidebar(true);
        }else{
            setSidebar(false);
        }
    };
    
    return(
    <div className="h-100 w-100 overflow-hidden d-flex position-absolute">
        <div className="container-fluid bg-secondary">
            <div className="h-100 row">
                    <div className="col-2 bg-secondary m-0 p-0 ">
                        <SideBar/>
                    </div>
                <div className="col-10 bg-primary p-1">
                    <StudyGroupListPage/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;