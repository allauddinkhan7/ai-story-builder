"use client";

import { imageStyleList } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const ImageStyle = () => {
  
  const [selectionOption, setSelectionOption] = useState<string>("");
  return (
    <>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {imageStyleList.map((item, index) => (
            <div
              key={index}
               className={`cursor-pointer hover:border rounded-2xl p-2 ${
              selectionOption === item.label
                ? "border border-gray-500 rounded-2xl"
                : ""
            }`}
              onClick={() => setSelectionOption(item.label)}
            >
              <Image
                src={item.imageUrl}
                alt={item.label}
                width={300}
                height={500}
                className="object-cover h-36 rounded-3xl"
              />

              <h2 className=" bottom-5 text-white text-center w-full italic">
                {item.label}
              </h2>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default ImageStyle;


