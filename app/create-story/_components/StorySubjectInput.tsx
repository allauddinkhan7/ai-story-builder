import { Textarea } from '@/components/ui/textarea'

const StorySubjectInput = ({ userSelection }: any) => {
  return  <Textarea
          placeholder="Type your message here."
          onChange={(e) =>
            userSelection({
              fieldValue: e.target.value,
              fieldName: "storySubject",
            })
          }
        />
}

export default StorySubjectInput