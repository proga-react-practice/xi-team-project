import CheckRadioConcept from "./CheckRadioConcept";
import RangeConcept from "./RangeConcept";
import { CHECK_AND_RADIO, RANGE } from "../../data";
import { ICardData } from "../Cards";
import React from "react";

interface IFormProps {
  setFormData: (data: (prevData: ICardData[]) => ICardData[]) => void;
}

const Modal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "20px",
      zIndex: 1000,
    }}
  >
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default function Form({ setFormData }: IFormProps) {
  const [rangeValue, setRangeValue] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const levelOfAI = Array.from(
      document.querySelectorAll('input[name="level"]:checked')
    ).map((input) => (input as HTMLInputElement).value);
    const whereAIIsUsed = Array.from(
      document.querySelectorAll('input[name="occupancy"]:checked')
    ).map((input) => (input as HTMLInputElement).value);
    const TypeOfAI = (
      document.querySelector('input[name="type"]:checked') as HTMLInputElement
    )?.value;
    const rateAIIntelligence = rangeValue;

    if (
      levelOfAI.length === 0 ||
      whereAIIsUsed.length === 0 ||
      !TypeOfAI ||
      rateAIIntelligence === 0
    ) {
      setErrorMessage("Please select at least one option.");
      return;
    }

    setFormData((prevData) => [
      ...prevData,
      {
        levelOfAI,
        whereAIIsUsed,
        TypeOfAI,
        rateAIIntelligence,
      },
    ]);

    console.log("Data sent:", {
      levelOfAI,
      whereAIIsUsed,
      TypeOfAI,
      rateAIIntelligence,
    });
  };
  const handleClear = () => {
    document
      .querySelectorAll('input[name="level"]')
      .forEach((input) => ((input as HTMLInputElement).checked = false));
    document
      .querySelectorAll('input[name="occupancy"]')
      .forEach((input) => ((input as HTMLInputElement).checked = false));
    (
      document.querySelector('input[name="type"]:checked') as HTMLInputElement
    ).checked = false;
    setRangeValue(0);
  };

  return (
    <div className="form-container">
      {errorMessage && (
        <Modal message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
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
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="reset" onClick={handleClear}>
            Clear
          </button>
        </section>
      </form>
    </div>
  );
}
