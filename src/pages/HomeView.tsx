// import { useState, } from "react";

import tripsArray from '../utilities/trips.json';
import exploreArray from '../utilities/explore.json';
import discoverArray from '../utilities/discover.json';

import SearchIcon from '../assets/svg/search.svg';
import FilterIcon from '../assets/svg/filter.svg';

import Input from "../components/Input";
import Grid from "../components/Grid";
import SectionHeading from "../components/SectionHeading";
import Carousel from "../components/Carousel";

interface Trips {
    name: string;
    image: string;
    rented_props_count: number;
}

interface Explore {
    name: string;
    image: string;
}

interface Discover {
    name: string;
    image: string;
}

const HomeView = () => {
    /**
     * The following has been removed to prevent a re render issue
     */
    // const [trips, setTrips] = useState<Trips[] | any>(); // any to override type def for the sake of time
    // const [explore, setExplore] = useState<Explore[] | any>(); // any to override type def for the sake of time
    // const [discover, setDiscover] = useState<Discover[] | any>(); // any to override type def for the sake of time

    // const initialise = () => {
    //     setTrips(tripsArray);
    //     setExplore(exploreArray);
    //     setDiscover(discoverArray);
    // }
    
    // initialise();

    const trips: Trips[] = tripsArray;
    const explore: Explore[] = exploreArray;
    const discover: Discover[] = discoverArray;

    return (
        <div className="gradient-wrapper">
            <div className="gardient-inner h-fit flex flex-col pt-[16px] pb-[31px] gap-[36px]">
                <Input imageSrc={SearchIcon} altText="Search Icon" inputType="text" placeholder="Search address, city, location" onChange={() => console.log('changed')}>
                    <img src={FilterIcon} alt="User Icon" className="absolute bottom-1/2 translate-y-1/2 right-[18px]" />
                </Input>

                <div className="cardLayout flex flex-col gap-[20px]">
                    <SectionHeading headingText="Find your next trip" headingSize="heading-4">
                        <p className="primary-link text-[14px] font-regular">See all</p>
                    </SectionHeading>

                    <Grid cardData={trips} />
                </div>

                <div className="card carousel flex flex-col gap-[20px]">
                    <SectionHeading headingText="Explore by living style" headingSize="heading-4" />

                    <Carousel cardData={explore} />
                </div>

                <div className="card carousel flex flex-col gap-[20px]">
                    <SectionHeading headingText="Want to discover other experiences" headingSize="heading-4" />

                    <Carousel cardData={discover} />
                </div>
            </div>
        </div>
    )
}

export default HomeView