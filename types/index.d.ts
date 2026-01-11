
declare interface FieldData {
  fieldName: string;
  fieldValue: string;
}


declare interface StorySubjectInputProps {
  userSelection: (data: FieldData) => void;
}


declare interface OptionFieldsTypes {
  label: string;
  imageUrl: string;
  isFree: boolean;
}
