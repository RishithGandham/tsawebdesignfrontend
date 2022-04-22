import NavbarComponent from './component/navbar.component';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    let events;
    async function getEvents() {
      const response = await axios.get('/eventResource/getAll')
      console.log(response.data)
      return response
    }
    getEvents()
      .then(response => {
        let today = new Date();
        today.setMonth(today.getMonth() + 1);
        console.log(today)
        for (let i = 0; i < response.data.events.length; i++) {
          let event = response.data.events[i];
          let eventDate = new Date();
          if (Date.parse(event.date) > Date.parse(today)) {
            response.data.events.splice(i, 1);

          }
        }
        setEvents(response.data.events);
        console.log(events)
      })
      .catch(err => console.log(err)) //TODO error handling



  }, []);
  return (
    <>

      <div className="container text-center mb-5 ">
        <h2 className='font-weight-bold display-2'>Light and Hope </h2>
        <h5 className='display-5'>Festivals and Traditional Events</h5>
      </div>
      <div className="container d-flex justify-content-center">
        <img class=" card-img-top rounded"
          src='http://tsawebapp.herokuapp.com/assets/sunflower.webp' alt="Card image cap" />
      </div>

      <div className='container  mt-3'>
        <div class="hero mb-5">
          <h4>For many years, humans have sought out light and hope; it provides comfort, warmth, the ability to see, and the energy to grow food. Light and Hope are celebrated throughout this world because it shows that during the dark times, there is still hope and light. This is the true importance that these festivals across the world are trying to commemorate.</h4>
        </div>
      </div>


      <div className='container upcoming-events text-center mb-5'>
        <h2 className=''>Upcoming Events</h2>
        <div className='list-group list-group-flush  mb-5 mt-3'>
          {events && events.map((event) => (
            <li key={event._id} className='list-group-item list-group-item-static list-group-item-action flex-column align-items-start'>

              <h3 className='mb-1 text-capitalize '><strong>{event.name} - {event.date.slice(0, 10)} </strong > </h3>

              <p className='mb-1'>{event.description.slice(0, 80).concat('...')}</p>
            </li>
          ))}
        </div>
      </div>






    </>
  );
}

export default App;
