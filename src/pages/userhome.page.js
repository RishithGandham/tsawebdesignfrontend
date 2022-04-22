import React, { useState, useEffect } from 'react'
import authInstance from '../util/axios.util'
import { FcInfo } from 'react-icons/fc'
import { IoIosExit } from 'react-icons/io'
import { ReactComponent as Line } from './images/line.svg'
import {useLocation} from 'react-router-dom'

function UserHomePage() {
  const [events, setEvents] = useState([])
  const [noevents, setNoEvents] = useState(false);


  const location = useLocation();

  useEffect(() => {
    

    const fetchStats = async () => {
      return await authInstance.get('/eventResource/getAllForUser');
    }
    fetchStats()
      .then((response) => {
        setEvents(response.data.events);
        if (response.data.events.length === 0) {
          setNoEvents(true);
        }

      })
      .catch((error) => {
        console.log(error.response)
      })

      const query = new URLSearchParams(location.search);
      const login = query.get('login');
      if(login === 'true') {
        window.location.href = '/#/home/'
        window.location.reload();
      }
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
        console.log(events.length)
        if (events.length === 0) {
          setNoEvents(true);
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  function info(id) {
    window.location.href = `/#/event/?q=${id}`
  }



  return (
    <>
      {/* list group  */}
      <div className='container mb-5'>
        {/* <h1 className=' text-center mb-4 display-3'>Registered Events</h1> */}
        {/* <h2 className='display-4 text-center'>Registered Events</h2> */}
        <h1 className='text-center display-4 mb-5'>My Events</h1>

        <div className='d-flex justify-content-center'>

          <div class="list-group-flush ">
            {events && events.map((event) => (
              <li key={event._id} class="list-group-item  list-group-item-static list-group-item-action flex-column align-items-start ">
                <div class="d-flex w-100 justify-content-between">
                  <h3 class="mb-1 text-capitalize">{event.name}</h3>

                </div>
                <p class="mb-1">{event.description.slice(0, 150).concat('...')}</p>
                <small className='btn ' onClick={_ => { unRegister(event._id) }}><IoIosExit size={30} /></small> &nbsp;
                <small className='btn ' onClick={_ => info(event._id)}><FcInfo size={30} /></small>
              </li>
            ))}
            {noevents ? <h3>You have no registered events</h3> : null}

          </div>



        </div>
        <div className='container text-center mt-5 text-muted'>
          {!noevents ? <p><i>We will send you Zoom meeting details as get we closer to the time of the event.</i></p> : null}
          
        </div>
      </div>
    </>
  )
}

export default UserHomePage

// // <li className='list-group-item' key={event}><h3>{event.name}</h3></li>



// import React, { useState, useEffect } from 'react'
// import authInstance from '../util/axios.util'
// import { FcInfo } from 'react-icons/fc'
// import { IoIosExit } from 'react-icons/io'
// import { ReactComponent as Line} from './images/line.svg'

// function UserHomePage() {
//   const [events, setEvents] = useState([])
//   const [noevents, setNoEvents] = useState(false);

//   useEffect(() => {
//     const fetchStats = async () => {
//       return await authInstance.get('/eventResource/getAllForUser');
//     }
//     fetchStats()
//       .then((response) => {
//         setEvents(response.data.events);
//         if (response.data.events.length === 0) {
//           setNoEvents(true);
//         }

//       })
//       .catch((error) => {
//         console.log(error.response)
//       })
//   }, [])


//   function unRegister(id) {
//     const fetchStats = async () => {
//       return await authInstance.post('/eventResource/unsubscribe', {
//         eventId: id
//       });
//     }
//     fetchStats()
//       .then((response) => {
//         console.log(response.data)
//         setEvents(events.filter(event => event._id !== id))
//       })
//       .catch((error) => {
//         console.log(error.response)
//       })
//   }

//   function info(id) {
//     window.location.href = `/#/event/?q=${id}`
//   }



//   return (
//     <>
//       {/* list group  */}
//       <div className='container mb-5'>
//         <h1 className=''>Registered Events</h1>
        

//         <div className='d-flex justify-content-center'>

//           <div class="list-group-flush ">
//             {events && events.map((event) => (
//               <li key={event._id} class="list-group-item list-group-item-action flex-column align-items-start ">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h3 class="mb-1 text-capitalize">{event.name}</h3>

//                 </div>
//                 <p class="mb-1">{event.description.slice(0, 150).concat('...')}</p>
//                 <small className='btn ' onClick={_ => { unRegister(event._id) }}><IoIosExit size={30} /></small> &nbsp;
//                 <small className='btn ' onClick={_ => info(event._id)}><FcInfo size={30} /></small>
//               </li>
//             ))}
//             {noevents ? <h3>You have no registered events</h3> : null}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default UserHomePage

// <li className='list-group-item' key={event}><h3>{event.name}</h3></li>