import { Link } from 'react-router-dom';

import {logout} from '../util/auth.util';


function UserNavbarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-yellow dark-navbar mb-5 bg-dark  navbar-fixed-top">
                <div className="container-fluid ">


                    <Link to='/' className='navbar-brand'>Light And Hope Festivals</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {localStorage.getItem('userName')}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Dashboard</a>
                                    <a class="dropdown-item" href="#">Settings</a>
                                    <a class="dropdown-item text-danger" onClick={logout} >Logout</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">Events</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserNavbarComponent;