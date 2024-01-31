import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TextContent = ({ children }: Props) => {
    return (
        <>
            { children }
        </>
    )
}

export default TextContent