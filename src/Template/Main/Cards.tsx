import PageCard from "./PageCard";

const cardData = [
  {
    heading: "Services",
    content: "We create change by interrupting the cycle of homelessness and building a foundation for young children to learn",
    color: "bg-indigo-400",
    textcolor: "text-indigo-400",
  },
  {
    heading: "Volunteer",
    content: "We depend on the involvement and generous support of individuals, churches, businesses, and foundations",
    color: "bg-lime-600",
    textcolor: "text-lime-600",
  },
  {
    heading: "Donate",
    content: "Consider giving a gift to support our mission of breaking the cycle of homelessness, one child at a time",
    color: "bg-pink-400",
    textcolor: "text-pink-400",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center items-center m-8 gap-8 flex-wrap">
        {cardData.map((card, index) => (
          <PageCard
            key={index}
            heading={card.heading}
            content={card.content}
            color={card.color}
            textcolor={card.textcolor}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="border-b-3 border-color w-[85vw]"></div>
      </div>
    </div>
  );
};

export default Cards;
