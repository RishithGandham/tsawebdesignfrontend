import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import authInstance from '../util/axios.util'


import {FcInfo} from 'react-icons/fc'


function EventsPage() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    
    async function fetchEvents() {
      return await authInstance.get('/eventResource/getAll')
    }


    fetchEvents()
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(err => {
        console.log(err.response);

      })

  }, [])

  function displayeEvent(id) {
    window.location.href = `/#/event?q=${id}`
  }

  return (
  <>
    <div className='container text-center'>
      <h1 className='mb-5 display-1'>Events</h1>
    </div>
    <div className='container '>
      
      <div className='list-group list-group-flush'>
        {events.map((event) => (
          <a key={event._id} href={`/#/event?q=${event._id}`} className='list-group-item list-group-item-action flex-column align-items-start'>
            <div className='d-flex w-100 justify-content-between'>
              <h3 className='mb-1 text-capitalize'>{event.name}</h3>
              <h5 className='btn ' onClick={_ => {displayeEvent(event._id)}}>{event.date.slice(0, 10)}</h5>
            </div>
            <p className='mb-1'>{event.description.slice(0, 80).concat('...')}</p>
          </a>
        ))}
      </div>
    </div>
  </>
  )
}

export default EventsPage;


{/* <div class="container text-center mb-5">
        <h3 class="">
          Cultural Events<br/>
            <small class="">Light and hope</small>
        </h3>
      </div>
      <div class="container">
        <div class="card" style={{width: '18rem'}}>
          <img class="card-img-top"
            src="https://i.picsum.photos/id/41/285/180.jpg?hmac=dWk5QSHKP-h55VPRPdndgf_M3oGw_cHmP7XMVkCuT5k"
            alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">urmom</h5>
              <p class="card-text">Festival of lights</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div> */}