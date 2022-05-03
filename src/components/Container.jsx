import MenuPage from './MenuPage';
import StudyGroupListPage from './StudyGroupListPage';
import NavBar from './NavBar'
import { useState } from 'react';

function Container(){
    const [currPage, setPage] = useState("menu");
    console.log(currPage);
    return(
    <div className="h-100 w-100 d-flex position-absolute bg-primary px-4 py-3 pt-5">
        <NavBar/>
        <div className="h-100 w-100 d-flex shadow rounded bg-secondary">
            {(currPage === "menu" ? <MenuPage/> : <StudyGroupListPage/>)}
        </div>
    </div>
    );
}

export default Container;