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
            </div>

            <ListGroup className="menu-group">

            <Link to="/profile" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        My Profile
                    </ListGroup.Item>
                </Link>

                <Link to="/" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        Create a Study Group
                    </ListGroup.Item>
                </Link>

                <Link to="/join" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        Join a Study Group
                    </ListGroup.Item>
                </Link>

                <Link to="/find" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        Find a Study Group
                    </ListGroup.Item>
                </Link>

                <Link to="/settings" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        Settings
                    </ListGroup.Item>
                </Link>

                <Link to="/logout" className="menu-link text-decoration-none">
                    <ListGroup.Item className="menu-item bg-primary text-secondary">
                        Logout
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    );
}

export default SideBar;