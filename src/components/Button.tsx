import { ReactNode } from "react";

interface Props {
    children: string | ReactNode;
    type?: string;
    onClick?: () => void;
}

const Button = ({ children, type = 'sky-500', onClick}: Props) => {
    return (
        <button className={'button button-' + type} onClick={onClick} type="submit">
            { children }
        </button>
    )
}

export default Button