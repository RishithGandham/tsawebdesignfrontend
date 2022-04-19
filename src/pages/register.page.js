import React, {useState} from 'react'
import light from './images/light.svg';
import axios from 'axios'

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(email, password, firstName, lastName);
    axios.post('/userResource/register', {
      email,
      password,
      firstName,
      lastName
    }).then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', response.data.user);
      window.location.href = '/#/home'

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
        <h1 class='mb-3'>Register:</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" onChange={e => setFirstName(e.target.value)} aria-describedby="emailHelp" placeholder="Enter First Name"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input type="email" class="form-control" onChange={e => setLastName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
          </div>
          <button type="submit" onClick={handleFormSubmit} class="btn btn-primary">Submit</button>
        </form>

        
        <div className='justify-content-center d-flex'>
          <img src={light} alt="light" className='light-image'  />
        </div>
      </div>
    </>
  )
}

export default RegisterPage