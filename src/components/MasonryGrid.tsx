import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const MasonryGrid = ({ children }: Props) => {

    return (
        <div className="gap-[0.563rem] columns-3">
            {children}
        </div>
    )
}

export default MasonryGrid