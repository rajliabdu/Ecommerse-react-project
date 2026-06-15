import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const nanigate = useNavigate();
      
    const [form,setForm] = useState ({
          email :"",
          password:"",
        });
    const [error ,setError] =useState("");

      const handleChange = (e) => {
      
           const {name , value} = e.target
          /  setForm({ ...form, [name]:value });
            
            //  setForm({ ...form, [e.target.name]: e.target.value });
           };

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));
        
        if (user &&
          ser.email === form.email &&
            user.password === form.password
        ) {
            localStorage.setItem("isLoggedIn", "true");
            alert('Login Successfully ')
            
            navigate("/home");
        } else {
            setError("Invalid credentials");
        }
    };
        
  
  
        return (
    <div>
    <form onSubmit={handleLogin}>
       <h2>Login</h2>
       <input type="email" name="email" placeholder=" Email" onChange={handleChange} />
       <input type="password" name="password" placeholder=" Password" onChange={handleChange} />
       <p>{error}</p>

       <button type="submit">Login</button>
    </form>

        
    </div>
  )
}

export default Login