type CheckboxRadioOptions = {
  label: string;
  name: string;
  value: string[];
};
type RangeOptions = {
  label: string;
  name: string;
  min: number;
  max: number;
  value: number;
};
export const CHECK_AND_RADIO: CheckboxRadioOptions[] = [
  {
    label: "Level of AI",
    name: "level",
    value: ["Low", "Medium", "High", "Very High"],
  },
  {
    label: "Where AI is used",
    name: "occupancy",
    value: [
      "Enemy AI",
      "Friendly AI",
      "Character Interaction",
      "Pathfinding",
      "Decision Making",
    ],
  },
  {
    label: "Type of AI",
    name: "type",
    value: ["NPC", "Neural Network", "Function"],
  },
];

export const RANGE: RangeOptions[] = [
  {
    label: "AI Intelligence",
    name: "rating",
    min: 0,
    max: 100,
    value: 0,
  },
];
