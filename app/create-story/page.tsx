"use client";

import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

const CreateStory = () => {
  const onHandleUserSelection = (data: FieldData) => {
    console.log("User Selection Data:", data);
  };

  return (
    <div className="bg-gray-900 text-gray-300 px-6 py-10 md:px-20 lg:px-40 w-full mx-auto">
      {/* Header */}
      <h2 className="font-extrabold text-[64px] text-center">Create</h2>

      <p className="text-xl text-center mt-2 italic">
        Unlock your creativity with AI-powered storytelling
      </p>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {/* LEFT COLUMN */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Subject of the Story</h3>
          <StorySubjectInput userSelection={onHandleUserSelection} />
        </section>

        {/* RIGHT COLUMN */}
        <section className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Story Type</h3>
            <StoryType userSelection={onHandleUserSelection} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Image Type</h3>
            {/* <AgeGroup /> */}
            <ImageStyle />
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default CreateStory;
