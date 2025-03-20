import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../../assets/org1.jpeg";
import pic2 from "../../assets/org2.jpg";
import pic3 from "../../assets/org3.jpg";
import pic4 from "../../assets/org4.jpg";
import pic5 from "../../assets/org5.webp";
import pic6 from "../../assets/org6.jpg";

const Section1 = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const images = [pic1, pic2, pic3, pic4, pic5, pic6];

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl text-lime-600 text-center p-4 font-bold mb-4">
        Thank you to our{" "}
        <u className="cursor-pointer hover:text-lime-800">Gala 2024</u> sponsors
        for your generous support!
      </p>

      {/* Carousel */}
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
    </div>
  );
};

export default Section1;
