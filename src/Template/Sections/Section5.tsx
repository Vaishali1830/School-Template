import pic1 from "../../assets/fun1.jpg";
import pic2 from "../../assets/fun2.webp";
import pic3 from "../../assets/fin3.jpeg";
import Card from "./Cards";

const Section5 = () => {
  const cardcontent = [
    {
      image: pic1,
      title: "Annual Gala 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      image: pic2,
      title: "Long Beach Gives Officially Open!",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      image: pic3,
      title: "2024 Annual Mother's Day Event",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];
  return (
    <div className="mt-8">
        <h1 className="text-4xl font-bold text-center text-lime-600 font-serif">Upcoming & Recent Events</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardcontent.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
            btntext="READ MORE"
          />
        ))}
      </div>
    </div>
  );
};

export default Section5;
