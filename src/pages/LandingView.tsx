import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MasonryGrid from "../components/MasonryGrid";
import Heading from "../components/Heading";
import TextContent from "../components/TextContent";

import Image1 from '../assets/images/Image-1.png';
import Image2 from '../assets/images/Image-2.png';
import Image3 from '../assets/images/Image-3.png';
import Image4 from '../assets/images/Image-4.png';
import Image5 from '../assets/images/Image-5.png';
import Image6 from '../assets/images/Image-6.png';
import Image7 from '../assets/images/Image-7.png';
import Image8 from '../assets/images/Image-8.png';
import Image9 from '../assets/images/Image-9.png';

const LandingView = () => {
    const navigate = useNavigate();

    // handle login click
    const handleLoginClick = () => {
        navigate('/login');
    }

    // handle sign up click
    const handleSignupClick = () => {
        navigate('/signup');
    }

    // make an array from imported images
    const galleryImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

    // map over images and return the individual items
    const items = galleryImages.map((imagePath, index) => {
        return (
            <div key={index} className="masonry-card">
                <img src={imagePath} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
        )
    });
    
    return (
        <div className="page-wrapper">
            <div className="masonry-grid">
                <div className="gradient-overlay" />
                <MasonryGrid>
                    {items}
                </MasonryGrid>
            </div>
            <div
                className="landing-content"
            >
                <div className="flex flex-col relative z-10 gap-[32px]">
                    <div className="-mt-[36px] flex flex-col gap-[8px]">
                        <Heading headingSize="heading-3" text="New Place, New Home!" />

                        <TextContent >
                            <p className="text-content">
                                Are you ready to uproot and start over in a new area?
                                Placoo will help you on your journey!
                            </p>
                        </TextContent>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button type="primary" onClick={handleLoginClick}>
                            Log in
                        </Button>
                        <Button type="secondary" onClick={handleSignupClick}>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingView