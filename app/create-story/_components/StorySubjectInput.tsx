import { Textarea } from "@/components/ui/textarea";
import { FieldData } from "../page";

interface StorySubjectInputProps {
  userSelection: (data: FieldData) => void;
}

const StorySubjectInput = ({ userSelection }: StorySubjectInputProps) => {
  return (
    <Textarea
      placeholder="Describe the story you want to create..."
      className="min-h-[140px]"
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
