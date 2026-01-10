"use client";

import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

export interface FieldData {
  fieldName: string;
  fieldValue: string;
}

const CreateStory = () => {
  const onHandleUserSelection = (data: FieldData) => {
    console.log("User Selection Data:", data);
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-6 md:px-20 lg:px-40 w-full mx-auto">
      {/* Header */}
      <h2 className="font-extrabold text-[64px] text-center">Create</h2>

      <p className="text-xl text-center mt-2 italic">
        Unlock your creativity with AI-powered storytelling
      </p>

      {/* SIDE BY SIDE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {/*input*/}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subject of the Story</h3>

          <StorySubjectInput userSelection={onHandleUserSelection} />
        </div>
        {/*options*/}
        <div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Story Type</h3>
            <StoryType />
          </div>

          <div>
            <h3 className="text-xl font-semibold mt-2"> Age Group</h3>
            <AgeGroup />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-2"> Image Style</h3>
          <ImageStyle />
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
