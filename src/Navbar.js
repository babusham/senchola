import React from 'react'
import { BiMenu } from "react-icons/bi";
import './Navbar.css';
import {NavLink as Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " id='color' >
                <div className="container-md">
                    <a className="navbar-brand text-capitalize fw-bold text-dark" href="/">Senchola university.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=" pb-2 text-success fs-3" id='icons' ><BiMenu/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item ">
                                <Link className="nav-link text-dark my-2 " aria-current="page" to='/' ><span>H</span>ome</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark my-2" to='/aboutus'><span>A</span>bout us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark my-2" to="/services" tabIndex="-1" aria-disabled="true"><span>S</span>ervices</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-dark my-2" to='/whysenchola'><span>W</span>hy senchola</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-dark my-2" to='/form'><span>F</span>orm</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-dark my-2" to='/contactus'><span>C</span>ontact us</Link>
                            </li>
                            <Link className='mt-1' to='/login'><button className='btn btn-outline-dark ms-2 my-2 py-1 px-4 rounded-pill'><span>&nbsp;</span>Login<span>&nbsp;</span></button>
                            </Link>
                            <Link to='/signup' className='mt-1'><button className='btn ms-2 btn-success text-white my-2 py-1 px-4 rounded-pill'>SignUp</button>
                            </Link>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;