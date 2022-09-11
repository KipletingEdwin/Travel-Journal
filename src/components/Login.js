import React,{useState} from 'react'

function Login() {
    const [formData1,setFormData1] =useState({
      username: "",
      password: "",
    })

    function handleInput(event){
      setFormData1({...formData1,[event.target.name]:event.target.value});
      console.log(formData1)
    }

    function handlePost(e){
      e.preventDefault()
      if (
        formData1.email === "" ||
        formData1.password === ""
      ){
        alert("Please,fill in all fiels")
      } else 
      fetch("http://localhost:9292/logins",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData1),
      })
      .then((resp) =>resp.json())
      .then((outdata) =>console.log(outdata))
      window.location.reload(false);

    }
    


  return (
    <div className='login' >
        <form>
            <h3>Login/SignUp</h3>
            <input type="email" name="email" placeholder="email"  onChange={handleInput} ></input>
            <input type="text" name="password" placeholder="Password" onChange={handleInput} ></input>
            <button onClick={handlePost} >Login</button>
            <button>Sign Up</button>

        </form>
    </div>
  )
}

export default Login