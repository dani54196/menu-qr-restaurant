import React, {useState} from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/3000/users', { email, password });
      localStorage.setItem('token', response.data.token);
      // redirect to dashboard or home page
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
