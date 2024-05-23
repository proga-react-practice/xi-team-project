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
export const INPUT_DATA_ASSETS: CheckboxRadioOptions[] = [
  {
    label: "Level of AI",
    name: "level",
    value: ["Low", "Medium", "High", "Extreme"],
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

export const RANGE_OPTIONS: RangeOptions[] = [
  {
    label: "AI Intelligence",
    name: "rating",
    min: 0,
    max: 100,
    value: 0,
  },
];
