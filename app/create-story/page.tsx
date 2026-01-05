"use client";

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
    <div className="p-6 md:px-20 lg:px-40 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="font-extrabold text-[64px] text-primary text-center">
        Create
      </h2>

      <p className="text-xl text-primary text-center mt-2 italic">
        Unlock your creativity with AI-powered storytelling
      </p>

      {/* SIDE BY SIDE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        
        {/* LEFT: Subject */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            1. Subject of the Story
          </h3>

          <StorySubjectInput userSelection={onHandleUserSelection} />
        </div>

        {/* RIGHT: Story Type */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            2. Story Type
          </h3>

          <StoryType  />
        </div>

      </div>
    </div>
  );
};

export default CreateStory;
