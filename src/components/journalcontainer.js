import React,{useEffect,useState} from "react";
import Journal from "./journal";


function JournalContainer({handleDeleteClick}){
    const[info,setInfo] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:9292/details")
        .then((r) => r.json())
        .then((data) =>setInfo(data));
      },[]);
  
       const allData=info.map((allData) =>{
        //    console.log(allData)
        return(
        // <h3>hello</h3>
        <Journal
        town_name={allData.town}
        country_name={allData.country}
        date={allData.date}
        description={allData.description}
        my_image={allData.image_url}
        id={allData.id}
        handleDeleteClick={handleDeleteClick}
        />
           
        )
      })
    
    return(
      <div>{allData}</div>
    // <Journal
    // town_name={allData.town}
    // />
    
    )

}
export default JournalContainer