import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeGarden from '../assets/img/grangeGarden.jpg'

const Friends = () => {
    return (
        <div>
            <ImgWrapper src={grangeGarden} alt="FriendsPhoto" title="Copains Du Moulin" />
            <section>
                <div></div>
            </section>

        </div>
    );
};

export default Friends;
