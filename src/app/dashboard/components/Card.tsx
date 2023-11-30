import Image from "next/image";

interface CardProps {
    image: string;
    title: string;
    date: string;
    badges: string[];
  }
  
  const Card: React.FC<CardProps> = ({ image, title, date, badges }) => {
    return (
      <div className="bg-white w-60 rounded-lg shadow-md p-4">
        <Image src={image} alt={title} width={250} height={300} className=" object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{date}</p>
        <div className="flex flex-wrap">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Card;