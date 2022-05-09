import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import '../styles.scss';

import {Link} from "react-router-dom"

function SideBar() {
    const [myRating, setMyRating] = useState(4.5);
    
    const ratingStars = ["bi-star", "bi-star", "bi-star", "bi-star", "bi-star"];

    for (let i = 0; i < ratingStars.length; i++) {
        if (myRating >= i + 1) {
            ratingStars[i] = "bi-star-fill"
        } else if (myRating >= i + 0.5) {
            ratingStars[i] = "bi-star-half"
        } else {
            ratingStars[i] = "bi-star"
        }
    }

    console.log(ratingStars)

    return (
        <div className="sidebar-container">
<<<<<<< Updated upstream
            <div className="profile-section px-2">
                <div className="image-container pt-2 mb-2">
                    <img className = "profile-pic" src={require('../images/picofme.jpg')} class="img-thumbnail" alt="Victor Santana"></img>
                </div>
                    <h1 className="mb-1 text-secondary">Victor Santana</h1>
                    <h6 className="mb-0 text-secondary">Major: Computer Science</h6>
                    <span className="star-group">
                        {ratingStars.map((ratingStar, i) => {return (<i key={i} className={"rating-star " + ratingStar}></i>);})}
                    </span>
                    <h6 className="rating-text mb-2 text-secondary">Rating: 4.5/5</h6>
=======
            <div className="profile-section">
                <div className="image-container pt-2">
                    <img className="rounded-circle w-75 h-50" src={require('../images/picofme.jpg')} class="img-thumbnail" alt="Victor Santana"></img>
                </div>
                <h1 className="mb-1">Victor Santana</h1>
                <h6 className="mb-0">Major: Computer Science</h6>
                <span className="star-group">
                    {ratingStars.map((ratingStar) => { return (<i className={"rating-star " + ratingStar}></i>); })}
                </span>
                <h6 className="rating-text text-muted mb-1">Rating: 4.5/5</h6>
>>>>>>> Stashed changes
            </div>

            <ListGroup className="menu-group">
<<<<<<< Updated upstream
                {menuButtons.map((menuButton, i) => {
                    return (<ListGroup.Item key={i} className="menu-item bg-primary text-secondary">{menuButton}</ListGroup.Item>);
                })}
=======
                <Link to="/profile" className="menu-item align-middle bg-secondary sidebar-link">
                    My Profile
                </Link>
                <Link to="/settings" className="menu-item align-middle bg-secondary sidebar-link">
                    Settings
                </Link>
                <Link to="/" className="menu-item align-middle bg-secondary">
                    Create a Study Group
                </Link>
                <Link to="/join" className="menu-item align-middle bg-secondary">
                    Join A Study Group
                </Link>
                <Link to="/find" className="menu-item align-middle bg-secondary">
                    Find Available Study Rooms
                </Link>
>>>>>>> Stashed changes
            </ListGroup>
        </div>
    );
}

export default SideBar;