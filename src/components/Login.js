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
        formData1.username === "" ||
        formData1.password === ""
      ){
        alert("Please,fill in all fiels")
      } else 
      fetch("")

    }
    


    

  return (
    <div className='login' >
        <form>
            <h3>Login/SignUp</h3>
            <input type="text" name="username" placeholder="Username"  onChange={handleInput} ></input>
            <input type="text" name="password" placeholder="Password" onChange={handleInput} ></input>
            <button>Login</button>
            <button>Sign Up</button>

        </form>
    </div>
  )
}

export default Login