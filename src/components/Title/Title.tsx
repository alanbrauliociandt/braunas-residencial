
import './Title.scss';

interface TitleProps {
    text: string;
    color?: string;
}
export function Title({ text, color }: TitleProps){
    return (
        <h1 className={color ? "title-section-white" : "title-section"}>{text}</h1>
    )
}