import react from "react";
import grangeGarden from "../assets/img/grangeGarden.jpg"

const HomePageCards = () => {
    return (
        <div className='homepageCard flex-row md:w-40'>
                <img src={grangeGarden} alt="grangegarden" />
                    <p>Add some random text information about this link</p>
                <a href=""></a>
        </div>
    )
}

export default HomePageCards