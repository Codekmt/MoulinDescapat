import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeGarden from '../assets/img/grangeGarden.jpg'
import Copains from '../components/Copains'

const Friends = () => {
    return (
        <div>
            <ImgWrapper src={grangeGarden} alt="FriendsPhoto" title="Copains Du Moulin" />
                <div>
                    <Copains>
                    </Copains>
                </div>


        </div>
    );
};

export default Friends;
