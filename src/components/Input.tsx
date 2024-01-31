import React, { ReactNode } from "react";

interface Props {
    imageSrc: string;
    altText: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputType: string;
    children?: ReactNode;
    placeholder?: string;
}

const Input = ({ imageSrc, altText, onChange, inputType, children, placeholder }: Props) => {
    return (
        <>
            <div className="relative">
                <img src={imageSrc} alt={altText} className="absolute bottom-1/2 translate-y-1/2 left-[18px]" />
                <input type={inputType} className="input input-username" onChange={onChange} placeholder={placeholder} />
                {children}
            </div>
        </>
    )
}

export default Input