import Impactcard from "./Impactcard";

const Section7 = () => {
  const cardcontent = [
    {
      title: "1999",
      content:
        "Precious Lamb Preschool was founded. We began serving students in January 2002.",
    },
    {
      title: "700",
      content:
        "Children ages 18 months-5 years old experiencing homelessness have received full time, free preschool.",
    },
    {
      title: "$0.80",
      content:
        "Precious Lamb Preschool was founded. We began serving students in January 2002.",
    },
    {
      title: "1:6 ratio",
      content:
        "Our uniquely low 1:6 ratio ensures small class size and an intimate, trauma-informed learning environment in designated classrooms.",
    },
  ];
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center text-lime-600 font-serif">
        Upcoming & Recent Events
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardcontent.map((card, index) => (
          <Impactcard key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <div className="flex justify-center m-4">
        <button className="border-2 py-2 w-40 rounded-lg text-violet-700 font-serif text-sm cursor-pointer hover:bg-violet-600 hover:text-white transition-all duration-500">
          LEARN MORE
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[80vw]"></div>
      </div>
    </div>
  );
};

export default Section7;
