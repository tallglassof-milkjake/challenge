import { ReactNode } from "react";

interface Props {
    cardTitle: string;
    imageSrc: string;
    classOverrides?: string;
    children?: string | ReactNode;
}

const Card = ({ cardTitle, imageSrc, classOverrides, children }: Props) => {
    return (
        <>
            <div className={`h-[227px] w-full flex flex-col justify-between rounded-[10px] overflow-hidden ${classOverrides}`}>
                <div className="bg-gray-500 min-h-[166px]">
                    <img className="object-cover h-full w-full" src={imageSrc} alt={`${cardTitle} image`} />
                </div>
                <div className="px-[16px] py-[16px] flex flex-col bg-white gap-[3px]">
                    <p className="text-[16px] font-semibold text-[#1A1E25] leading-[100%] truncate">
                        {cardTitle}
                    </p>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card