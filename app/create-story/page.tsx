"use client";
import StorySubjectInput from "./_components/StorySubjectInput";


export interface feildData {
  fieldName: string;
  fieldValue: string;
}

const CreateStory = () => {
  const onHandleUserSelection = (data: feildData) => {
    console.log("User Selection Data:", data);
  }
  return (
    <div className="p-6 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[70px] text-primary text-center">
        Create
      </h2>

      <p className="text-2xl text-primary text-center mt-2 italic">
        Unlock your creativity with AI-powered storytelling
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Story Subject*/}
        <StorySubjectInput userSelection={onHandleUserSelection}/>
        {/* Story Type */}
        {/* Age Group */}
        {/* Image Style */}
      </div>
    </div>
  );
};

export default CreateStory;
