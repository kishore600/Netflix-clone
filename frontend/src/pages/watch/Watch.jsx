import React from 'react'
import './watch.scss'  
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation()
  const movie = location.state.movie
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>
        <video className="video" autoPlay progress controls src={movie.video} />
      </Link>
    </div>
  )
}

export default Watch