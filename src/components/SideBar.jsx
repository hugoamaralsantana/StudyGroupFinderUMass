import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import '../styles.scss';

function SideBar() {
    const [myRating, setMyRating] = useState(4.5);
    
    const ratingStars = ["bi-star", "bi-star", "bi-star", "bi-star", "bi-star"];

    const menuButtons = ["My Profile", "History", "Settings", "Help", "Log Out"]

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
            <div className="profile-section">
                <div className="image-container pt-2">
                    <img className = "rounded-circle w-75 h-50" src={require('../images/picofme.jpg')} class="img-thumbnail" alt="Victor Santana"></img>
                </div>
                    <h1 className="mb-1">Victor Santana</h1>
                    <h6 className="mb-0">Major: Computer Science</h6>
                    <span className="star-group">
                        {ratingStars.map((ratingStar) => {return (<i className={"rating-star " + ratingStar}></i>);})}
                    </span>
                    <h6 className="rating-text text-muted mb-1">Rating: 4.5/5</h6>
            </div>
        <ListGroup className="menu-group">
            {menuButtons.map((menuButton) => {
                return (<ListGroup.Item className="menu-item align-middle bg-secondary">{menuButton}</ListGroup.Item>);
            })}
        </ListGroup>
        </div>
    );
}

export default SideBar;