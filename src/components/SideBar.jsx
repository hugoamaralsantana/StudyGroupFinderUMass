import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import '../styles.scss';

function SideBar() {
    const [myRating, setMyRating] = useState(4.5);

    return(
        <ListGroup className="menu-group">
            <div className="profile-section">
                <div className="image-container pt-2">
                    <img className = "rounded-circle w-75 h-50" src={require('../images/picofme.jpg')} class="img-thumbnail" alt="Victor Santana"></img>
                    <h1 className="mt-1">Victor Santana</h1>
                    <span className="star-group">
                        <i className="bi-star rating-star"></i>
                        <i className="bi-star rating-star"></i>
                        <i className="bi-star rating-star"></i>
                        <i className="bi-star rating-star"></i>
                        <i className="bi-star rating-star"></i>
                    </span>
                </div>
            </div>
            <ListGroup.Item className="menu-item bg-secondary">My Profile</ListGroup.Item>
            <ListGroup.Item className="menu-item bg-secondary">History</ListGroup.Item>
            <ListGroup.Item className="menu-item bg-secondary">Settings</ListGroup.Item>
            <ListGroup.Item className="menu-item bg-secondary">Support</ListGroup.Item>
            <ListGroup.Item className="menu-item bg-secondary">Log Out</ListGroup.Item>
        </ListGroup>
    );
}

export default SideBar;