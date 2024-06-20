import { Star } from "./Star";
import { ICount } from "../models";

export const Stars = ({ count }: { count: ICount }) => {
    if (count < 1 || count > 5) {
        return <div className="errorDiv">You can choose only from 1 to 5 stars</div>
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