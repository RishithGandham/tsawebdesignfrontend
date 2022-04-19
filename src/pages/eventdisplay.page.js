import React, { useEffect, useState, useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { ImEnter } from 'react-icons/im';
import authInstance from '../util/axios.util';



function EventDisplayPage({ props }) {

  const location = useLocation();
  const [event, setEvent] = useState(null);
  useLayoutEffect(() => {
    console.log('hello')
    const query = new URLSearchParams(location.search);
    const id = query.get('q');
    async function fetchEvent() {
      return await authInstance.post(`/eventResource/getById`, { id: id });
    }
    fetchEvent()
      .then(response => {
        setEvent(response.data.event);
      })
      .catch(error => {
        console.log(error);
        window.location.href = '/#/events';
      })
  }, [])

  function subscribeToEvent() {
    async function subscribe() {
      return await authInstance.post(`/eventResource/subscribe`, {
        eventId: event._id
      });
    }
    subscribe()
      .then(response => {
        console.log(response);
      }
      )
      .catch(error => {
        console.log(error);
        window.location.href = '/#/events';
      }
      )
  }

  console.log(event && 'hello')

  return (
    <>
        {event && <div className='container'>
          <div class="row ">
            <div class="col d-flex justify-content-center ">
              <img class="rounded display-image"
                src={event.img_url} alt="Card image cap" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <div class id="text">
                <p><strong>When:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {event && event.date.slice(0, 10)} </p>
                <p><strong> Sponsor: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TSA Team</p>
                <p><strong> Event Location: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Online</p>
                <p><strong> Cost: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free
                </p>
                <p><strong> Details: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {event && event.description}</p>


                <button class='btn btn-dark'>Register For This Event&nbsp; <ImEnter size={30} /></button>
              </div>
            </div>
          </div>
        </div>}
        {/* { event &&
        
      } */}
    </>
  )
}

export default EventDisplayPage;

