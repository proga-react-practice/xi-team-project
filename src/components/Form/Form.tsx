import { CHECK_AND_RADIO, RANGE } from "../../data";
import Alert from "../Alert";
import React, { useState } from "react";
export interface AI {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}
interface IFormProps {
  onSubmit: (Ai: AI) => void;
}

const Form = ({ onSubmit }: IFormProps) => {
  const [rangeValue, setRangeValue] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const defaultFormState = {
    levelOfAI: [],
    whereAIIsUsed: [],
    TypeOfAI: "",
    rateAIIntelligence: 0,
  };

  const [Ai, setAI] = useState<AI>(defaultFormState);

  const onLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, levelOfAI: [...Ai.levelOfAI, e.target.value] });
  };

  const onWhereUsedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, whereAIIsUsed: [...Ai.whereAIIsUsed, e.target.value] });
  };

  const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, TypeOfAI: e.target.value });
  };

  const onRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setAI({ ...Ai, rateAIIntelligence: newValue });
    setRangeValue(newValue);
  };

  const validateAI = (Ai: AI) => {
    if (
      Ai.levelOfAI.length === 0 ||
      Ai.whereAIIsUsed.length === 0 ||
      !Ai.TypeOfAI ||
      Ai.rateAIIntelligence === 0
    ) {
      return "Please fill all the fields";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const error = validateAI(Ai);
    if (error) {
      setErrorMessage(error);
      return;
    }
    onSubmit(Ai);
    console.log(Ai);
  };
  const handleClear = () => {
    setErrorMessage(null);
    setRangeValue(0);
    setAI(defaultFormState);
    console.log(Ai);
  };

  return (
    <div className="form-container">
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <form onSubmit={handleSubmit}>
        <section id="examples">
          <div className="form-group">
            <label>Level of AI</label>
            <div className="checkbox-group">
              {CHECK_AND_RADIO[0].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    name="levelOfAI"
                    value={val}
                    id={val}
                    onChange={onLevelChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Where AI is used</label>
            <div className="checkbox-group">
              {CHECK_AND_RADIO[1].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    name="levelOfAI"
                    value={val}
                    id={val}
                    onChange={onWhereUsedChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Type of AI</label>
            <div className="radio-group">
              {CHECK_AND_RADIO[2].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="TypeOfAI"
                    value={val}
                    id={val}
                    onChange={onTypeChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Rate AI intelligence</label>
            <div className="range-group">
              <input
                type="range"
                name="rateAIIntelligence"
                min={RANGE[0].min}
                max={RANGE[0].max}
                value={rangeValue}
                onChange={onRateChange}
              />
              <span>{rangeValue}</span>
            </div>
          </div>
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
};

export default Form;
