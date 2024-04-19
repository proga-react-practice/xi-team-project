type CROptions = {
  label: string;
  class_Name: string;
  input_Type: string;
  name: string;
  value: string[];
};
type ROptions = {
  label: string;
  class_Name: string;
    name: string;
    min: number;
    max: number;
  value: number;
};
export const CHECK_AND_RADIO: CROptions[] = [
    {
    label: 'Level of AI',
    class_Name:  'checkbox-group',
    input_Type: 'checkbox',
    name:'level',
    value:['Low', 'Medium', 'High', 'Very High'],
    },
    {
    label: 'Where AI is used for?',
    class_Name:  'checkbox-group',
    input_Type: 'checkbox',
    name:'occupancy',
    value:['Enemy AI', 'Friendly AI', 'Character Interaction', 'Pathfinding','Decision Making'],
    },
  {
    label: 'Type of AI',
    class_Name:  'radio-group',
    input_Type: 'radio',
    name:'type',
    value:['NPC', 'Neural Network', 'Function'],
  },
//   {
// //    className:  'checkbox-group',
// //     type: 'checkbox',
// //     name:'level',
//     value:'Very High',
//   },
];

export const RANGE: ROptions[] = [
    {
        label: 'Rate AI Intelligence:',
        class_Name: 'range-container',
        name: 'rating',
        min: 1,
        max: 10,
        value: 3,
    },
    ];