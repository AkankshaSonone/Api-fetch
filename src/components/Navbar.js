import React from 'react';

import { Link, useNavigate } from "react-router-dom";

export default function Navbar (){

    const navigate = useNavigate();

        return (
            <nav className="navbar navbar-dark navbar-expand-lg " style={{ backgroundColor: "#5e3023" }}>
                <div className="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "25px" }}>
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" aria-current="page" to="/"><strong>API Data Fetch</strong></Link>
                            </li>
                            <li className="nav-item mx-2 my-3 g text-center" style={{width:"885px"}}>
                                <span className="nav-link active">Developed by Akanksha Sonone</span>
                            </li>                            
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-lg btn-outline-light mx-5" type="button" onClick={()=>{navigate('/users')}}>Get Users</button>
                        </form>
                    </div>
                </div>
            </nav>
        )

}