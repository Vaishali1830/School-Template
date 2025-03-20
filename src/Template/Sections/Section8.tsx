import Card from "./Cards"
import s1 from "../../assets/s1.jpeg";
import s2 from "../../assets/s2.webp";
import s3 from "../../assets/s3.jpeg";

const Section8 = () => {
    const cardcontent = [
        {
          image: s1,
          title: "Story 1",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          image: s2,
          title: "Story 2",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          image: s3,
          title: "Story 3",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
      ];
  return (
    <div className="mt-6">
      <h1 className="text-4xl font-bold text-center text-lime-600 font-serif">What Parents Say</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardcontent.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
            btntext="READ MORE"
            textcolor = "text-voilet-600"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-color font-semibold font-serif text-lg bg-new-color py-2 px-4 rounded-lg mb-6">VIEW ALL STORIES</button>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[80vw]"></div>
      </div>
    </div>
  )
}

export default Section8
