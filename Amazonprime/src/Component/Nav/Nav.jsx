import React from 'react'
import "./Navbar.css"
import logo from "./Asstes/logo.png"
import { faMagnifyingGlass, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className='container-fluid  d-flex justify-content-center bg-black' style={{ height: '70px' }}>
      <nav className=' container-fluid nav h-100 w-100 d-flex justify-content-center'>
        <div className='row h-100 w-100 d-flex justify-content-center bg-black'>
          {/* logo box */}
          <div className='col-2 h-100 d-flex justify-content-start align-items-center position-relative'>
            <img src={logo} alt="" width={"96px"} className='position-relative' style={{ left: "35px" }} />
          </div>
          {/* Menubox */}
          <div className='col-5 h-100 position-relative'>
            <ul className='list-inline list-group-horizontal h-100 w-100 d-flex align-items-center position-absolute'>
              <li className='list-inline-item d-flex justify-content-center align-items-center '><Link to="/" className='text-decoration-none text-white  '><button className='border border-0 btn btn-outline-light'> Home</button></Link></li>
              <li className='list-inline-item d-flex justify-content-center align-items-center'><Link to="/movie" className='text-decoration-none text-white '><button className='border border-0  btn btn-outline-light'> Movie</button></Link></li>
              <li className='list-inline-item d-flex justify-content-center align-items-center'><Link to="tvshows" className='text-decoration-none text-white '><button className='border border-0  btn btn-outline-light'> TV shows</button></Link></li>

            </ul>
          </div>
          {/* iconbox */}
          <div className='col-5 h-100 justify-content-end  d-flex align-items-center gap-2'>
            <button className=' border border-0 btn btn-outline-light rounded-circle me-1'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='serchbox1' style={{ fontSize: "15px" }} />
            </button>
            <button className=' border border-0 btn btn-outline-drak d-flex  justify-content-center align-items-center me-2'>
              <DropdownButton id="dropdown-basic-button" variant='bg-black text-white' title="EN">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tamil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Kanada</Dropdown.Item>
              </DropdownButton>
            </button>
            <button className='btn  text-white rounded-circle buttonmenu' style={{ backgroundColor: "#33373d", height: "50px", width: "50px" }}>
              <BsFillGrid3X3GapFill style={{ marginTop: "6px", marginRight: "2px", fontSize: "20px" }} />
              <DropdownButton id="dropdown-basic-button" variant='bg-black text-white position-relative rounded-circle menudrop ' style={{ top: "-23px", right: "7px" }}>
                <Dropdown.Item href="#/action-1">
                  <div className='d-flex'>
                    <div>
                      <ul className='text-white d-flex flex-column gap-2'>
                        <li className='list-group'><label className='text-black'>Genres</label></li>
                        <li className='list-group'><button className='btn btn-primary'>Action And adventage</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Anime</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Comdey</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Documetray</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Drama</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Fantasty</button></li>
                      </ul>
                    </div>
                    <div>
                      <ul className='text-white d-flex flex-column gap-2 ' style={{ marginTop: "42px" }}>
                        <li className='list-group'><button className='btn btn-primary'>Horror</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Kids</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Mystery And thrillers</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Romance</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Science fication</button></li>
                      </ul>
                    </div>
                    <div>
                      <ul className='text-white d-flex flex-column gap-2'>
                        <li className='list-group'><label className='text-black'>Featured collections</label></li>
                        <li className='list-group'><button className='btn btn-primary'>Home Premiere</button></li>
                        <li className='list-group'><button className='btn btn-primary'>New Releases</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Mx Player</button></li>
                        <li className='list-group'><button className='btn btn-primary'>Critically acclaimed</button></li>
                        <li className='list-group'><button className='btn btn-primary'>kids</button></li>
                      </ul>
                    </div>
                  </div>
                </Dropdown.Item>

              </DropdownButton>
            </button>

            <div className='rounded-circle  userbox d-block justify-content-center align-content-center ' style={{ height: "50px", width: "50px" }}>
              <FontAwesomeIcon icon={faUser} className='fs-3 position-relative z-2 fontcolor' style={{ top: "10px", left: "10px" }} />
              <DropdownButton id="dropdown-basic-button" style={{top:"-20px",left:"7px"}} variant='bg-black h-100 w-100 position-relative rounded-circle dropbox' className='z-1 '>
                <Dropdown.Item href="#/action-1">
                  <ul className='d-flex gap-2 flex-column'>
                    <li className='list-group'><label>YOUR ACCOUNT</label></li>
                    <li className='list-group'><button className='btn btn-primary'>Sign In</button></li>
                    <li className='list-group'><button className='btn btn-primary'>Help</button></li>
                    <li className='list-group'><button className='btn btn-primary'>Watch Anywhere</button></li>
                  </ul>
                </Dropdown.Item>

              </DropdownButton>
            
            </div>
              <Link to={"/login"} className='me-4'><button className='btn  btn-primary'>Login</button></Link>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Nav