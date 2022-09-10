// import logo from './logo.svg';
import '../App.css';
import React, {useState } from 'react';
import NewEvent from './newevent';
import Journal from './journal';
import JournalContainer from './journalcontainer';
import Login from './Login';


function App() {
          const[formData,setFormData] = useState({
        country: "",
        town: "",
        date: "",
        description: "",
      
    })
 
    const[info,setInfo] = useState([]);


    function handleChange(e){
      setFormData({...formData,[e.target.name]: e.target.value});
      // console.log(formData)
  }
    
    function handleDeleteClick(id){
      fetch(`http://localhost:9292/details/${id}`,{
        method: "DELETE",
      })
      .then((res) =>res.json())
      .then(() =>onDelete());
    }



    function onDelete(id){
      const rem = info.filter((item) =>{
        return item.id !== id;
      });
      setInfo(rem);
      window.location.reload(false);
    }



    // useEffect(() =>{
    //   fetch("http://localhost:9292/details")
    //   .then((r) => r.json())
    //   .then((data) =>setInfo(data));
    // });
    
    function handleSubmit(e){
      e.preventDefault();
         if (
           formData.country === "" ||
           formData.town === "" ||
           formData.date === "" ||
           formData.description === "" 
         ){
           alert("Please fill in all fields");
         } else {
      fetch("http://localhost:9292/details",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
      })
      .then((res) =>res.json())
      .then((info) =>console.log(info));
      window.location.reload(false);
      setFormData({
        ...formData,
        country: "",
        town: "",
        date: "",
        description: "",
        
     
      });
     }
   }

  return (
    <div className="App">
     <div className="App2">
    
      <Login/>
      <NewEvent handleChange={handleChange}
         handleSubmit={handleSubmit}
         />
          <JournalContainer handleDeleteClick={handleDeleteClick}  />
       
      </div>
      <div className="Journal">
      <Journal  />
      </div>
      </div>
  );
  }

export default App;
