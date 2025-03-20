import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../../assets/org1.jpeg";
import pic2 from "../../assets/org2.jpg";
import pic3 from "../../assets/org3.jpg";
import pic4 from "../../assets/org4.jpg";
import pic5 from "../../assets/org5.webp";
import pic6 from "../../assets/org6.jpg";

const Section9 = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const images = [pic1, pic2, pic3, pic4, pic5, pic6];
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-center text-lime-600 font-serif">
        Our Partners
      </h1>
      <div className="w-full">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          infinite={true}
          arrows={true}
          containerClass="pb-6"
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Sponsor ${index + 1}`}
                className="w-64 h-40 object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex justify-center">
        <button className="border border-violet-600 h-10 mt-3 mr-3 rounded-lg px-4 mb-6 text-violet-600 hover:bg-violet-500 transition-all duration-500 hover:text-white">
          ALL SPONSORS
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[80vw]"></div>
      </div>
    </div>
  );
};

export default Section9;
