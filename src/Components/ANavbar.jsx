import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function ANavbar() {
  const navigate = useNavigate()

  const handleLogout = (e) =>{
  
    navigate("../clubs")
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top " style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container ">
          <p className='navbar-brand' style={{color:'InactiveCaptionText'}}>Chaitanya Bharathi Institute Of Technology</p>

          {/* Add the toggler button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-4">
                <NavLink className="nav-link" to='/' exact activeClassName='active'>Home</NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" to='/clubs' activeClassName='active'>Clubs</NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" to='/about' activeClassName='active'>About</NavLink>
              </li>
              <li className="nav-item px-4 ">
                <button className="btn btn-outline-danger" onClick={()=>handleLogout()}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default ANavbar