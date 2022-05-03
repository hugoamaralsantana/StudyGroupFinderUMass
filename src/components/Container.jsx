import MenuPage from './MenuPage';
import StudyGroupListPage from './StudyGroupListPage';
import NavBar from './NavBar'
import { useState } from 'react';
import styles from '../styles.scss'

function Container(){
    const [currPage, setPage] = useState("studygrouplist");
    console.log(currPage);
    return(
    <div className="h-100 w-100 overflow-hidden d-flex position-absolute">
        <div className="container-fluid bg-secondary p-0">
            <div className="h-10 row">
                
            </div>
            <div className="row">
                    <div className="sidemenu col-4 bg-primary">

                    </div>
                <div className="col bg-danger">
                    <button class="btn btn-warning menuCollapse" type="button" data-toggle="collapse" data-target="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu">
                        Collapse Menu
                    </button>

                    {(currPage === "studygrouplist" ? <StudyGroupListPage/> : <MenuPage/>)}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;