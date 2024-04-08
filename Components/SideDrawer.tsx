import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SideDrawer = ({ place, close }: any) => {
  const BASE_URL_PHOTO =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
  // go to adress map
  const onDirectionClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=" +
        place.name +
        place.formatted_address
    );
  };

  return (
    <motion.div
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, type: "spring" }}
      className="h-screen w-screen md:w-[400px] bg-white
    shadow-md p-5 z-20"
    >
      <button onClick={() => close()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#02356B]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div>
        <h2 className="line-clamp-2 text-[22px] font-semibold mb-3">
          {place.name}
        </h2>
        <Image
          src={
            BASE_URL_PHOTO +
            "&photo_reference=" +
            place?.photos[0].photo_reference +
            "&key=" +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt="placeholder"
          width={200}
          height={150}
          className="w-full h-[220px] object-cover rounded-lg "
        />
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#DD2222]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h2 className="text-[12px] text-gray-400">
            {place.formatted_address}
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#FFA800]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <h2 className="text-[12px] text-gray-400 line-clamp-2 tracking-wider">
            {place.rating} ({place.user_ratings_total})
          </h2>
        </div>
        <div className="flex my-6 gap-3 justify-between ">
          <div>
            <button
              className="flex gap-1.5 bg-[#02356B] w-[130px] text-white px-5 rounded-full py-1 hover:bg-white hover:text-[#02356B] border-[#02356B] border transition-all duration-500 ease-in-out "
              onClick={() => onDirectionClick()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>
              Direction
            </button>
          </div>
          <div className="w-full flex justify-between">
            <button className="flex gap-1.5 bg-[#02356B] w-[130px] text-white px-5 rounded-full py-1 hover:bg-white hover:text-[#02356B] border-[#02356B] border transition-all duration-500 ease-in-out ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
        <div className="mt-5">
          <iframe
            width={600}
            height={600}
            loading="lazy"
            className="w-full h-[250px] rounded-lg shadow-lg rounded-lg border shadow-lg"
            src={
              "https://www.google.com/maps/embed/v1/place?key=" +
              process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY +
              "&q=" +
              place.formatted_address
            }
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default SideDrawer;
