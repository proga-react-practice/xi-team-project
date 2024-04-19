
interface RangeConceptProps {
  label: string;
  class_Name: string;
  name: string;
  min: number;
  max: number;
  value: number;
}

export default function RangeConcept(props: RangeConceptProps){
  return(
    <div className="form-group">
                <label>{props.label}</label>
            <div className={props.class_Name}>
            <input type="range" name={props.name} min={props.min} max={props.max} value={props.value} />
                    </div>
    </div>
  )
}