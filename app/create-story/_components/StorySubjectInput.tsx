import { Textarea } from "@/components/ui/textarea";



const StorySubjectInput = ({ userSelection }: StorySubjectInputProps) => {
  return (
    <Textarea
      placeholder="Describe the story you want to create..."
      className="h-96 bg-gray-800 text-gray-200"
      onChange={(e) =>
        userSelection({
          fieldName: "storySubject",
          fieldValue: e.target.value,
        })
      }
    />
  );
};

export default StorySubjectInput;
