import React from "react";



function NewEvent({handleChange,handleSubmit}){
    // const[formData,setFormData] = useState({
    //     country: "",
    //     town: "",
    //     date: "",
    //     description: "",
    //     user_id: "",
    //     image_url: ""
    // })

    // function handleChange(e){
    //     setFormData({...formData,[e.target.name]: e.target.value});
    //     console.log(formData)
    // }


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

                {/* <input type="text"
                 name="user_id"
                 onChange={handleChange}
                placeholder="user_id"
                ></input> */}

                <textarea placeholder="Enter a short description"
                 name="description"
                 onChange={handleChange}
                ></textarea>
               
                {/* <input type="file"
                name="image_url"
                placeholder="image_url"
                onChange={handleChange}
                ></input> */}
               
                {/* <input type="image"></input> */}
                {/* <img></img> */}
            </form>
            <button onClick={handleSubmit} >Create New Event</button>

        </div>
    )
}
export default NewEvent