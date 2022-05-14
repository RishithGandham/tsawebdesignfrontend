import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../util/auth.util';
import { isAuth } from '../util/auth.util';
const NavbarComponent = (props) => {
    let executeBlock = false;
    const [authenticated, isAuthenticated] = useState(false);

    useEffect(_ => {
        (async () => {
            const auth = await isAuth();
            props.trigger(auth);
        })();
    }, [])

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark navbar-yellow dark-navbar mb-5 bg-dark  navbar-fixed-top ">
                <div className="container-fluid ">


                    <Link to='/' className='navbar-brand'>Light and Hope Events</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        {!props.navbarstate ?
                            <ul className="navbar-nav   ">

                                <li className="nav-item">
                                    <Link to="/events" className="nav-link">Events</Link>
                                </li>



                                <li className="nav-item">
                                    <Link to="/activities" className="nav-link">Fun Activities</Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Other Information (TSA)
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="/#/reference">Reference Page</a>
                                        <a class="dropdown-item " href='/#/sources' >Sources of Information</a>
                                    </div>
                                </li>
                                

                                


                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>




                            </ul> : <></>}

                        {props.navbarstate ?
                            <ul className="navbar-nav ">


                                <li className="nav-item">
                                    <Link to="/events" className="nav-link">Events</Link>
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Other Information (TSA)
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="/#/reference">Reference Page</a>
                                        <a class="dropdown-item " href='/#/sources' >Sources of Information</a>
                                    </div>
                                </li>
                                

                                <li className="nav-item">
                                    <Link to="/activities" className="nav-link">Fun Activities</Link>
                                </li>

                                

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {localStorage.getItem('userName')}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="/#/home">Dashboard</a>
                                        <a class="dropdown-item text-danger" onClick={logout} >Logout</a>
                                    </div>
                                </li>
                            </ul>
                            : <></>}


                    </div>
                </div>
            </nav>
        </>
    );
}




export default NavbarComponent;




