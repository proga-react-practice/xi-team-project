import CheckRadioConcept from "./CheckRadioConcept";
import RangeConcept from "./RangeConcept";
import { CHECK_AND_RADIO, RANGE } from "../../data";
import React from "react";

export default function Form() {
  const [rangeValue, setRangeValue] = React.useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <button>Submit</button>
        </section>
      </form>
    </div>
  );
}
