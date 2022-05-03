import ListGroup from 'react-bootstrap/ListGroup';
import '../styles.scss';

function SideBar() {
    return(
        <ListGroup className="menu-group">
            <div className="profile-section">
                <div className="image-container py-1">
                    <img className = "w-75 h-50 rounded-circle" src={require('../images/picofme.jpg')} class="img-thumbnail" alt="Victor Santana"></img>
                    <h1 className="mt-1">Victor Santana</h1>
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