"use client";
import Image from "next/image";
import Hero from "@/Components/Hero";
import PlaceList from "@/Components/PlaceList";
import { useEffect, useState } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    getPlaceList("hotels");
  }, []);

  const getPlaceList = async (value: string) => {
    setPlaceList([]);
    const result = await fetch("api/google-place-api?q=" + value);
    const data = await result.json();
    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  };
  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
