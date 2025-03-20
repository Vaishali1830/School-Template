import s1 from "../../assets/s1.jpeg";
import s2 from "../../assets/s2.webp";
import s3 from "../../assets/s3.jpeg";
import s4 from "../../assets/s4.jpeg";
import s5 from "../../assets/s5.jpeg";
import s6 from "../../assets/s6.webp";
import s7 from "../../assets/s7.webp";
import s8 from "../../assets/s8.jpg";
import s9 from "../../assets/s9.jpeg";
import s10 from "../../assets/s10.jpeg";
import s11 from "../../assets/s11.jpg";
import s12 from "../../assets/s12.jpeg";

const Section6 = () => {
  const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
  return (
    <div className="bg-lime-600">
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center text-color font-serif">
          Our Children
        </h1>
        <div className="mt-3">
          <p className="text-color text-lg font-serif text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            <span className="block text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {images.map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-surface">
            <img src={img} alt={`Child ${index + 1}`} className="w-full h-60 object-cover image-fit rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
