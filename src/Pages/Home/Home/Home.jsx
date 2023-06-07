import React from 'react';
import Banner from '../Banner/Banner';
import TeamworkSection from '../TeamworkSection/TeamworkSection';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TeamworkSection></TeamworkSection>
           <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;