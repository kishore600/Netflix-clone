import React,{useState} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }
  console.log(isScrolled);
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
            <Link to="/" className="link">
              <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
              <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <SearchIcon className="icon"/>
            <span>KID</span>
            <NotificationsIcon className="icon"/>
            <img src="https://kishorek-portfolio.netlify.app/static/media/kishore.7eae54e32fbc88a5fb2c.png" alt="" />
            <div className="profile">
              <ArrowDropDownIcon className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar