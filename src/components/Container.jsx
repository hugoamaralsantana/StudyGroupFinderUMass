import MenuPage from './MenuPage';
import StudyGroupListPage from './StudyGroupListPage';
import NavBar from './NavBar'
import { useState } from 'react';

function Container(){
    const [currPage, setPage] = useState("studygrouplist");
    console.log(currPage);
    return(
    <div className="h-100 w-100 d-flex position-absolute bg-primary px-4 py-3">
        <div className="h-100 w-100 d-flex shadow rounded bg-secondary">
            {(currPage === "studygrouplist" ? <StudyGroupListPage/> : <MenuPage/>)}
        </div>
    </div>
    );
}

export default Container;