import React from 'react'

import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const validate = () => {
        let err = {};

        if (!form.username.trim()) err.username = "Username required";

        if (!form.email.includes("@"))
            err.email = "Invalid email";

        if (form.password.length < 6)
            err.password = "Min 6 characters";

        if (form.password !== form.confirmPassword)
            err.confirmPassword = "Passwords do not match";
      }
         setErrors(err)

        return Object.keys(err).length === 0;
     
          const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    username: form.username,
                    email: form.email,
                    password: form.password,
                })
            );

            alert("Registered Successfully");
            navigate("/login");
          }

  return (
    <div className="h-auto w-25  d-flex align-content-center  justify-content-center mb-5 mt-5 shadow"
        style={{
          marginLeft: "35%",
          backgroundColor: "#eeeee4",
          borderRadius: "0px",
        }}>
<form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <input name="username" placeholder="Username" onChange={handleChange} />
                <p>{errors.username}</p>

                <input name="email" placeholder="Email" onChange={handleChange} />
                <p>{errors.email}</p>

                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <p>{errors.password}</p>

                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                <p>{errors.confirmPassword}</p>

                <button type="submit">Register</button>
            </form>
        </div>

    
  )
}
}
export default Register