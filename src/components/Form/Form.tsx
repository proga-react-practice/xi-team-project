import CheckRadioConcept from "./CheckRadioConcept";
import RangeConcept from "./RangeConcept";
import { CHECK_AND_RADIO, RANGE } from "../../data";
import { ICardData } from "../Cards";
import React from "react";

interface IFormProps {
  setFormData: (data: ICardData) => void;
}

export default function Form({ setFormData }: IFormProps) {
  const [rangeValue, setRangeValue] = React.useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const levelOfAI = Array.from(
      document.querySelectorAll('input[name="level"]:checked')
    ).map((input) => (input as HTMLInputElement)?.value || "");
    const whereAIIsUsed = Array.from(
      document.querySelectorAll('input[name="occupancy"]:checked')
    ).map((input) => (input as HTMLInputElement)?.value || "");
    const TypeOfAI = (
      document.querySelector('input[name="type"]:checked') as HTMLInputElement
    ).value;
    const rateAIIntelligence = rangeValue;

    setFormData({
      levelOfAI,
      whereAIIsUsed,
      TypeOfAI,
      rateAIIntelligence,
    });

    console.log("Data sent:", {
      levelOfAI,
      whereAIIsUsed,
      TypeOfAI,
      rateAIIntelligence,
    });
  };
  const handleClear = () => {
    setFormData({
      levelOfAI: [],
      whereAIIsUsed: [],
      TypeOfAI: "",
      rateAIIntelligence: 0,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <section id="examples">
          <CheckRadioConcept {...CHECK_AND_RADIO[0]} />
          <CheckRadioConcept {...CHECK_AND_RADIO[1]} />
          <CheckRadioConcept {...CHECK_AND_RADIO[2]} />
          <RangeConcept
            {...RANGE[0]}
            value={rangeValue}
            onChange={setRangeValue}
          />
          <button onClick={handleSubmit}>Submit</button>
          <button type="reset" onClick={handleClear}>
            Clear
          </button>
        </section>
      </form>
    </div>
  );
}
