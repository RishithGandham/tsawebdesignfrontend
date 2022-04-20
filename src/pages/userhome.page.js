import React, { useState, useEffect } from 'react'
import authInstance from '../util/axios.util'
import {FcInfo} from 'react-icons/fc'
import {IoIosExit} from 'react-icons/io'

function UserHomePage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchStats = async () => {
      return await authInstance.get('/eventResource/getAllForUser');
    }
    fetchStats()
      .then((response) => {
        setEvents(response.data.events);  
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])


  function unRegister(id) {
    const fetchStats = async () => {
      return await authInstance.post('/eventResource/unsubscribe', {
        eventId: id
      });
    }
    fetchStats()
      .then((response) => {
        console.log(response.data)
        setEvents(events.filter(event => event._id !== id))
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  function info(id) {
    window.location.href = `/event/${id}`
  }



  return (
    <>
      {/* list group  */}
      <div className='container '>
        <h1 className='mb-5'>Registered Events</h1>
        <div className='d-flex justify-content-center'>

          <div class="list-group ">
            {events && events.map((event) => (
              <li key={event._id}class="list-group-item list-group-item-action flex-column align-items-start ">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 text-capitalize">{event.name}</h5>

                </div>
                <p class="mb-1">{event.description.slice(0, 150).concat('...')}</p>
                <small  className='btn ' onClick={_ => {unRegister(event._id)}}><IoIosExit size={30}/></small> &nbsp; 
                <small className='btn '><FcInfo size={30}/></small>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserHomePage

// <li className='list-group-item' key={event}><h3>{event.name}</h3></li>