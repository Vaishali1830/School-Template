import bg from "../../assets/bg3.avif";

const Footer1 = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img src={bg} alt="Support Us" className="w-full h-76 object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center text-center md:text-left p-6 bg-opacity-50">
        <div className="md:w-1/2 text-color">
          <h1 className="text-4xl font-bold font-serif">Support Us</h1>
          <p className="text-2xl font-bold font-serif mt-3">
            Join in our efforts to break the cycle of homelessness, one child at a time.
          </p>
          <button className="mt-4 px-6 py-2 bg-lime-600 text-color rounded-lg font-serif text-sm hover:bg-lime-700 transition-all duration-300">
            DONATE TODAY!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
