import React,{useState} from 'react'

function Login() {
    const [user,setUser] =useState([])
    const [pass,setPass] =useState([])

  return (
    <div className='login' >
        <form>
            <h3>Login/SignUp</h3>
            <input type="text" name="login" placeholder="Username" ></input>
            <input type="text" name="login" placeholder="Password" ></input>
            <button>Login</button>
            <button>Sign Up</button>

        </form>
    </div>
  )
}

export default Login