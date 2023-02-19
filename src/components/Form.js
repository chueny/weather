import React from "react";

function Form({getWeather}){
    /*consult source if this doesnt work */
     return (
        <form onSubmit={getWeather}>
            <h5> find the current weather forecast</h5> 
            <input type="text" id="city" name="city" placeholder="City" required/>
            <button>Fetch</button>
        </form>
    );
}

export default Form;