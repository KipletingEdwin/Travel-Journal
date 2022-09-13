import React from "react";


function NewEvent({handleChange,handleSubmit}){
    return(
        <div className="New_form">
            <form>
                <h3>Travel Diary</h3>
                <h5>Add New Event</h5>
                <input type="text"
                name="country"
                onChange={handleChange}
                placeholder="Country"
                ></input>

                <input type="text"
                 name="town"
                 onChange={handleChange}
                placeholder="City"
                ></input>

                <input type="date"
                 name="date"
                 onChange={handleChange}
                placeholder="Date"
                ></input>

             

                <textarea placeholder="Enter a short description"
                 name="description"
                 onChange={handleChange}
                ></textarea>
               
              
                {/* <input type="image"></input> */}
                {/* <img></img> */}
            </form>
            <button onClick={handleSubmit} >Create New Event</button>

        </div>
    )
}
export default NewEvent