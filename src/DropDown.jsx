import { useState } from 'react';
import user from './assets/imgs/userT.png';  // Adjust the path accordingly
import './DropDown.css';

const DropDown = () => {
    const [openProfile, setOpenProfile] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setOpenProfile(!openProfile);
    };

    return (
        <div className="dropDownWrapper">
            <img 
                src={user} 
                alt="userT" 
                className="user-img" 
                onClick={toggleDropdown}  // Toggle dropdown on click
            />
            {openProfile && (
                <div className="dropDownProfile">
                    <ul>
                        <li>Profile</li>
                        <li>Setting</li>
                        <li>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;
