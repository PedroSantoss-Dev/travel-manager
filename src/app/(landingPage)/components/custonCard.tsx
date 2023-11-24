import Image from "next/image";
import { Children } from "react";

interface ICard {
    image: string
    name: string
    children?: React.ReactNode
}
const Card = ({ image, name, children }: ICard) => {

    const cardStyle = {
        backgroundImage: `url(${image})`,
      };
    return (
        <article 
        className=" w-60 h-60 m-5 flex justify-center items-center flex-col rounded bg-cover bg-center relative  "
        style={cardStyle}
        >
            <h3 className=" font-semibold text-white z-40 absolute">{name}</h3>
            <div>{children} </div>
        </article>
    );
}

export default Card;