import React from 'react';
import {useState} from 'react';

export default function Contact() {
  const handleChange = (e) => {
    if(!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    } 

    setMessage(e.target.value);
  };

  const handleClick = () => {
    window.alert(`Thank you for your interest! I will reach out to you when I am first availible`);
  }

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email); 
  }

  return (
    <div className="card">
      <h3>Contact Me: </h3>
      <div className="form">
          <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address:</label>
        <input 
          type="email" 
          className="form-control" 
          id="message" 
          name="message" 
          value={message} 
          onChange={handleChange} />

        {error && <p style={{color: 'red'}}>{error}</p>}  
      </div>



      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Your message: </label>
        <textarea className="form-control" id="messageInput" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </div>  
    </div>)
}
