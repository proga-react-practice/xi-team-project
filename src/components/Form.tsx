export default function Form() {
    return (
        <form>
            <label>Level of AI</label>
            <input type="checkbox" name="level" value="Low" />Low
            <input type="checkbox" name="level" value="Medium>" />Medium
            <input type="checkbox" name="level" value="High" />High
            <input type="checkbox" name="level" value="Very High" />Very High

            <label>Where AI is used for?</label>
            <input type="checkbox" name="occupancy" value="Enemy AI" />Enemy AI
            <input type="checkbox" name="occupancy" value="Friendly AI" />Friendly AI
            <input type="checkbox" name="occupancy" value="Character Interaction" />Character Interaction
            <input type="checkbox" name="occupancy" value="Pathfinding" />Pathfinding
            <input type="checkbox" name="occupancy" value="Decision Making" />Decision Making
            
            <label>Rate AI Intelligence:</label>
            <input type="range" name="Rating" min="1" max="10" value="3" />
            
            <label>Type of AI</label>
            <input type="radio" name="Type" value="NPC" />NPC
            <input type="radio" name="Type" value="Neural Network" />Neural Network
            <input type="radio" name="Type" value="Function" />Function


            <button>Submit</button>
        </form>




    )
}