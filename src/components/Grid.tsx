import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Card from './Card';

interface CardData {
    name: string;
    image: string;
    rented_props_count: number;
}

interface Props {
    cardData: CardData[];
}

const Grid: React.FC<Props> = ({ cardData }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
    const visibleCardData = isSmallScreen ? cardData.slice(0, 2) : cardData;
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-1 md:grid-cols-4 gap-4">
                {visibleCardData.map((card, index) => (
                    <Card key={index} cardTitle={card.name} imageSrc={card.image}>
                        <p className="text-[13px] font-normal text-[#7D7F88] leading-[100%] truncate">{`${card.rented_props_count} rented props`}</p>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Grid