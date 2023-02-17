import React from "react";

function Form({getWeather}){
    /*consult source if this doesnt work */
     return (
        <form onSubmit={getWeather}> 
            <input type="text" id="city" name="city" placeholder="City" required/>
            <button>Fetch</button>
        </form>
    );
}

export default Form;