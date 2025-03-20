import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import school1 from '../../assets/schhol1.jpg';
import school2 from '../../assets/school8.jpg'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Sample images for the carousel
const images = [{
    image : school1,
    text : "Empowering Resilience: Transforming Trauma Through Education"
},
{
    image : school2,
    text : "Education is Not the Filling of a Pail, but the Lighting of a Fire"
},
];

const ImageCarousel: React.FC = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true} 
        autoPlaySpeed={2000}
        infinite={true}
        showDots={true} 
        arrows={false}
      >
        {images.map((img, index) => (
          <div key={index} className="relative h-[100vh]">
             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-color text-6xl font-extrabold px-8 py-2 bg-black/50 rounded-md">{img.text}</p>
            <img
              src={img.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
           
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
