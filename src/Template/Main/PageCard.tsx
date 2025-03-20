import React from "react";

interface CardProps {
  heading: string;
  content: string;
  color : string;
  textcolor : string;
}

const PageCard: React.FC<CardProps> = ({ heading, content , color , textcolor }) => {
  return (
    <div className={`max-w-sm p-6 rounded-lg shadow-lg h-68 flex flex-col justify-between
      hover:shadow-2xl transition-shadow duration-300 m-2 ${color}
      transform transition-transform duration-300 hover:-translate-y-2`}>
      <h2 className="text-xl font-semibold text-color mb-3 text-center">{heading}</h2>
      
      <p className="text-color mb-6">{content}</p>
      <div className="flex justify-center">
        <button className={`bg-surface p-2 rounded-md text-sm cursor-pointer ${textcolor}`}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default PageCard;
