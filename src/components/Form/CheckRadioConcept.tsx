import React from "react";

interface ICheckRadioConceptProps {
  label: string;
  class_Name: string;
  input_Type: string;
  name: string;
  value: string[];
}
export default function CheckRadioConcept(props: ICheckRadioConceptProps) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div className={props.class_Name}>
        {props.value.map((val, index) => (
          <React.Fragment key={index}>
            <input
              type={props.input_Type}
              name={props.name}
              value={val}
              id={val}
            />
            <label htmlFor={val}>{val}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
