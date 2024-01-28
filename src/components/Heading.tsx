interface Props {
    headingSize: string;
    text: string;
    classOverrides?: string;
}

const Heading = ({ headingSize, text, classOverrides = '' }: Props) => {
    return (
        <>
            <h1 className={`${headingSize} ${classOverrides}`}>
                {text}
            </h1>
        </>
    )
}

export default Heading