import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ImEnter } from 'react-icons/im';
import authInstance from '../util/axios.util';
import axios from 'axios';
import { isAuth } from '../util/auth.util';
import { NotificationManager } from 'react-notifications';



function EventDisplayPage({ props }) {

  const [auth, setAuth] = useState(false);

  const location = useLocation();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    async function getAuth() {
      return await isAuth();
    }
    getAuth().then(res => {
      setAuth(res);
    });
    console.log('hello')
    const query = new URLSearchParams(location.search);
    const id = query.get('q');
    async function fetchEvent() {
      return await axios.post(`/eventResource/getById`, { id: id });
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
        window.location.href = '/#/home';
        NotificationManager.success('We will send you Zoom meeting details as we get closer to the time of this event.', 'Success', 10000);
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



        <div class="col d-flex justify-content-center w-100 ">
          <img class="rounded card-image-top  image-event"
            src={event.img_url} alt="Card image cap" />
        </div>

        <br />
        <div class id="text">
          <div class='row'>
            <div class="col-3">
              <h5><strong>When:</strong></h5>
            </div>
            <div class="col-9">
              <h5>{event && event.date.slice(0, 10)}</h5>
            </div>
          </div>
          <div class='row'>
            <div class="col-3">
              <h5><strong>Event Location:</strong></h5>
            </div>
            <div class="col-9">
              <h5>Online</h5>
            </div>
          </div>
          <div class='row'>
            <div class="col-3">
              <h5><strong>Cost:</strong></h5>
            </div>
            <div class="col-9">
              <h5>Free</h5>
            </div>
          </div>
          <div class='row'>
            <div class="col-3 ">
              <h5><strong>Description:</strong></h5>
            </div>
            <div class="col-9 text-justify">

            </div>
          </div>
          <div class='row'>

            <div class="col-12 text-justify">
              <h5>{event && event.description}</h5>
            </div>
          </div>

          <h5><strong><Link to='/activities'>Fun Activities</Link></strong></h5>




          {auth ? <button className="btn btn-primary mb-4 mt-2" onClick={subscribeToEvent}>Register For This Event <ImEnter size={30} /></button> : <button className="btn btn-primary mb-4 mt-2" onClick={() => window.location.href = '/#/login'}>You Need To Register Or Login To Sign Up For An Event</button>}







          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {event && event.date.slice(0, 10)} 
                <h5><strong> Sponsor: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TSA Team</h5>
                <h5><strong> Event Location: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Online</h5>
                <h5><strong> Cost: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free</h5>
                <h5><strong> Details: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {event && event.description}</h5>
                <Link to={`/activities`}>Fun Activities</Link><br/>
                {auth ? <button className="btn btn-primary mb-4 mt-2" onClick={subscribeToEvent}>Register For This Event <ImEnter size={30} /></button>: <button className="btn btn-primary mb-4 mt-2" onClick={() => window.location.href = '/#/login'}>You Need To Register Or Login To Sign Up For An Event</button>} */}

        </div>
      </div>}


      {/* { event &&
        
      } */}
    </>
  )
}

export default EventDisplayPage;

