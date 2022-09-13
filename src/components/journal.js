import React from "react";


function Journal({town_name,country_name,date,description,handleDeleteClick,id}){
    return(
        <div className="Ap">
        <div className="Ap">
         
          

        </div>
        <div  className="App3">
          <h3><span>Country</span>:{country_name}</h3>
          <h4><span>Town</span>:{town_name}</h4>
          <h4><span>Year</span>:{date}</h4>
          <p><span>Description</span>:{description}</p>
             <button id='button2' onClick={()=>handleDeleteClick(id)} >Delete</button>
        </div>
    </div>
    )
}

export default Journal