import React from 'react';
import Banner from '../Banner/Banner';
import TeamworkSection from '../TeamworkSection/TeamworkSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TeamworkSection></TeamworkSection>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;