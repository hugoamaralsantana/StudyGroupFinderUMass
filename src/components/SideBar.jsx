import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import '../styles.scss';

import { Link } from "react-router-dom"

function SideBar() {
    const myRating = 4.5;
    
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
            </div>
            </div>

            <ListGroup className="menu-group">

                <ListGroup.Item className="menu-item bg-primary text-secondary">
                    <Link to="/profile">
                        My Profile
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item className="menu-item bg-primary text-secondary">
                    <Link to="/">
                        Create a Study Group
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item className="menu-item bg-primary text-secondary">
                    <Link to="/join">
                        Join A Study Group
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item className="menu-item bg-primary text-secondary">
                    <Link to="/find">
                        Find Available Study Rooms
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item className="menu-item bg-primary text-secondary">
                    <Link to="/settings">
                        Settings
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default SideBar;