import React, { useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import SideDrawer from "./SideDrawer";
import Skeleton from "./Skeleton";

const PlaceList = ({ placeList }: any) => {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);
  return (
    <div className="relative px-[10px] md:px-[120px] mt-7 z-10">
      <h2 className="text-[20px] font-semibold text-white py-4">
        Search Results
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {placeList.map((place: any, index: number) => (
          <div
            key={index}
            className="z-10"
            onClick={() => setSelectedPlace(place)}
          >
            <PlaceItemCard place={place} />
          </div>
        ))}
      </div>
      {selectedPlace?.name ? (
        // close slideDrawer
        <div className="fixed top-0 right-0 z-20">
          <SideDrawer
            place={selectedPlace}
            close={() => setSelectedPlace([])}
          />
        </div>
      ) : null}
      {placeList?.length==0? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {[1,2,3,4,5,6,7].map((item,index)=>(
          <Skeleton/>
        ))}
      </div>:null};
    </div>
  );
};

export default PlaceList;
