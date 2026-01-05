"use client";

import Image from "next/image";
import { useState } from "react";

const StoryType = () => {
  const OptionList = [
    {
      label: "Story Book",
      imageUrl:
        "https://images.unsplash.com/photo-1645082215735-465c261c2e06?w=500",
      isFree: true,
    },
    {
      label: "Bed Story",
      imageUrl:
        "https://media.istockphoto.com/id/1158162402/photo/young-loving-mother-reads-bedtime-stories-to-her-little-beautiful-daughter-who-goes-to-sleep.webp?a=1&b=1&s=612x612&w=0&k=20&c=5LNc2KUmSLJUZ5RI9sDZ5nHcRToQbnE9ntfxvwjvnyo=",
      isFree: true,
    },
    {
      label: "Educational Story",
      imageUrl:
        "https://media.istockphoto.com/id/1470160123/photo/female-teacher-reads-to-multi-cultural-elementary-school-pupils-sitting-on-floor-in-class-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=o67o-6Yh_5hAeg72H9XPobgS_-5ZYYd7C41d77Mjiig=",
      isFree: false,
    },
  ];
  const [selectionOption, setSelectionOption] = useState <string>("");
  return (
    <>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {OptionList.map((item, index) => (
          <div key={index} className="relative grayscale hover:grayscale-0"
          onClick={()=> setSelectionOption(item.label)}>
            <h2 className="absolute bottom-5 text-white text-center w-full">
              {item.label}
            </h2>

            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default StoryType;
