
import CheckRadioConcept from './CheckRadioConcept'
import RangeConcept from './RangeConcept'
import { CHECK_AND_RADIO,RANGE } from '../../data'

export default function Form() {
    return (
        <form>
            <section id="examples">
                <CheckRadioConcept {...CHECK_AND_RADIO[0]} />
                <CheckRadioConcept {...CHECK_AND_RADIO[1]} />
                <CheckRadioConcept {...CHECK_AND_RADIO[2]} />
                <RangeConcept {...RANGE[0]}/>
                <button>Submit</button>
                </section>
        </form>
    )
}