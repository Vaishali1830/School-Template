import Card from "./Cards";
import pic1 from "../../assets/pic1.webp";
import pic2 from "../../assets/pic2.jpg";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
const Section4 = () => {
  return (
    <div className="bg-violet-500 flex flex-col justify-center items-center">
      {/* header */}
      <div>
        <h1 className="text-color font-bold text-4xl font-serif text-center m-4">
          Our Services
        </h1>
        <div>
          <p className="text-color text-lg font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            <span className="block text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {/* card1 */}
        <Card
          image={pic1}
          title="Parent Mentoring"
          content="precious Lamb offers a monthly mentoring program for our current and former mothers called “Breakfast Club for the betterment of the organisation."
          btntext="LEARN MORE"
        />
        <div
          className="bg-lime-600 md:w-85  w-[70vw] md:h-[65vh] rounded-lg m-6 flex justify-center items-center p-4 flex-col 
                       transform transition-transform duration-300 hover:-translate-y-2"
        >
          {/* image */}
          <div className="h-30 w-30 rounded-full bg-lime-400 flex justify-center items-center">
            <LiaHandHoldingHeartSolid size={80} color="white" />
          </div>
          {/* content */}
          <div className="m-2">
            <h1 className="text-xl font-bold text-color font-serif mt-4">
              Eligibility Requirements!
            </h1>
            <p className="text-color text-sm font-serif mt-4 ">
              Our goal is to help children be school-ready by emphasizing
              academic, social and emotional development through trauma-informed
              education.
            </p>
            <div className="flex justify-center items-center">
              <button className="py-2 w-40 mt-6 rounded-lg text-color font-serif text-sm bg-new-color">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <Card
          image={pic2}
          title="Quality Early Education"
          content="We offer full day, quality early education for children 18 months to five years old for those experiencing homelessness. Join our waitlist today!"
          btntext="LEARN MORE"
        />
      </div>
    </div>
  );
};

export default Section4;
