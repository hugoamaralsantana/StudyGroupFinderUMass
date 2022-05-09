import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import '../styles.scss';

function SideBar() {
    const myRating = 4.5;
    
    const ratingStars = ["bi-star", "bi-star", "bi-star", "bi-star", "bi-star"];

    const menuButtons = ["My Profile", "My Study Groups", "Create a Study Group", "Join a Study Group", "Find a Study Group", "Settings", "Log Out"]

    for(let i = 0; i < ratingStars.length; i++) {
            if(myRating >= i+1){
                ratingStars[i] = "bi-star-fill"
            } else if(myRating >= i+0.5){
                ratingStars[i] = "bi-star-half"
            } else {
                ratingStars[i] = "bi-star"
            }
    }

    console.log(ratingStars)

    return(
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
                {menuButtons.map((menuButton, i) => {
                    return (<ListGroup.Item key={i} className="menu-item bg-primary text-secondary">{menuButton}</ListGroup.Item>);
                })}
            </ListGroup>
        </div>
    );
}

export default SideBar;