import React, {useState}from 'react'
// import light from './images/light.png';
import {ReactComponent as Light} from './images/light.svg';

import axios from 'axios';
function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

    axios.post('/userResource/login', {
      email,
      password
    }).then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', response.data.user);
      localStorage.setItem('userName', response.data.user.firstName);
      window.location.href = '/#/home/?login=true'
      setInterval( () => {
        window.location.reload();
      }, 1000)
      // window.location.reload();
    }).catch(error => {
      if(error.response) {
        console.log(error.response.data);    
      }
             //TODO error handling
    });
  }

  return (  
    <>
      <div className='container mb-5'>
        <div>
        <h1 class='mb-3'>Login:</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>

        <div className='justify-content-center d-flex'>
          {/* <img src={light} alt="light" className='light-image'  /> */}
          <Light className='light-image' />
        </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage