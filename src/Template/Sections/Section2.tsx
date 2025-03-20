import { useState } from "react";

const Section2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "-X7okpS9Ufc";

  return (
    <div className="md:flex overflow-x-hidden bg-violet-500 md:h-[80vh] overflow-y-hidden">
      {/* content */}
      <div className="flex flex-col justify-center pl-6 md:w-[50vw]">
        <h1 className="text-4xl text-color font-bold ml-9 font-serif mt-4">
          Capital Campaign
        </h1>
        <p className="text-color p-10 text-lg font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim culpa,
          dolor commodi tenetur placeat aliquam. Impedit, natus eius? At nobis
          nam laboriosam officia, vel quo sint odio exercitationem voluptas,
          ducimus praesentium iusto asperiores culpa mollitia?
        </p>
        <p className="text-color pl-11 text-xl font-bold font-serif mb-4">Children are a gift from the Lord; they are a reward from Him.” Psalms 127:3
        </p>
      </div>

      {/* Video */}
      <div className="flex justify-center items-center pb-6  md:w-[50vw]">
        {isPlaying ? (
          <iframe
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        ) : (
          <div
            className="relative cursor-pointer pr-8"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="YouTube Thumbnail"
              className="rounded-lg shadow-lg w-[600px] h-[360px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-color"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 6v12l10-6z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
