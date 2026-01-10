"use client";

import Image from "next/image";
import { useState } from "react";

const AgeGroup = () => {

  const OptionList = [
    {
      label: "10 - 15 Years",
      imageUrl:
        "https://media.istockphoto.com/id/123905412/photo/low-angle-view-of-teenagers-in-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=rYgpZWv0Ui516dAz6bACEWxrXMZ1EMz0jwVoBav1mVU=",
      isFree: true,
    },
    {
      label: "16 - 25 years",
      imageUrl:
        "https://images.unsplash.com/photo-1558023598-0afa967eac90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlMjB0byUyMDI1JTIweWVhcnMlMjBvbGQlMjBraWRzJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D",
      isFree: true,
    },
    {
      label: "26 - 40 years",
      imageUrl:
        "https://images.unsplash.com/photo-1646579886741-12b59840c63f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDI2JTIwLSUyMDQwJTIweWVhcnMlMjBvbGQlMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D",
      isFree: false,
    },
  ];
  const [selectionOption, setSelectionOption] = useState<string>("");
  return (
    <>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {OptionList.map((item, index) => (
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

export default AgeGroup;
