import { Star } from "./Star";
import { ICount } from "../models";

export const Stars = ({ count }: { count: ICount }) => {
    if (count < 1 || count > 5) {
        return null;
    }

    const StarArray = [];
    for (let i = 0; i < count; i++) {
        StarArray.push(<Star key={i}/>)
    }
    
    return (
        <>
           <ul className="card-body-stars">      
                {StarArray}
           </ul>
        </>

    )
} 