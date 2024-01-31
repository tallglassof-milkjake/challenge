import { ReactNode } from "react";
import Heading from "./Heading";

interface Props {
    headingText: string;
    headingSize: string;
    children?: ReactNode;
}

const SectionHeading = ({ headingText, headingSize, children }: Props) => {
    return (
        <div className="flex flex-row justify-between">
            <Heading text={headingText} headingSize={headingSize} />
            {children}
        </div>
    )
}

export default SectionHeading