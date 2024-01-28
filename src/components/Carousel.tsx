import React from 'react'

import Card from './Card';

interface CardData {
    name: string;
    image: string;
}

interface Props {
    cardData: CardData[];
}

const Carousel: React.FC<Props> = ({ cardData }) => {
    return (
        <div className="relative h-[211px] overflow-x-hidden">
            <div className="absolute flex flex-row gap-4 overflow-x-scroll">
                {cardData.map((card, index) => (
                    <Card key={index} cardTitle={card.name} imageSrc={card.image} classOverrides="!h-[211px] !w-[182px]"/>
                ))}
            </div>
        </div>
    )
}

export default Carousel