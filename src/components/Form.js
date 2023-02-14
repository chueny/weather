import React from "react"

function Form({getWeather}){
    /*consult source if this doesnt work */
     return (
        <form> 
            <input type="text" id="city" name="city" placeholder="City"/>
            <button onClick={getWeather}>Fetch</button>
        </form>
    );
}

export default Form;