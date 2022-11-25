import React,{useState,useEffect} from 'react'
import './listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import axios from "axios"
import { Link } from 'react-router-dom';

const Listitem = ({index,item}) => {
  const [isHovered, setisHovered] = useState(false)
  const [movie,setMovie] = useState({})
  useEffect(()=>{
    const getMovie = async ()=>{
      try {
        const res = await axios.get("/movie/find/"+item,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc1OWVkMmQ5YzlkYjY1ODQ3YTg5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE0NTg2MSwiZXhwIjoxNjY4NTc3ODYxfQ.eGE_9BYPsLfD4y_vkBOVqeQUQAUyq_qsn7r7XyX7c40"
          },  
        })
        console.log(movie);
        setMovie(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  },[item])
  return (
    <Link to="/watch" state={{movie:movie}}>
      <div 
        className="listitem" 
        style={{left: isHovered && index * 225-50 + index * 2.5}}
        onMouseEnter={()=>setisHovered(true)} 
        onMouseLeave={()=>setisHovered(false)}
        >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
          <video src = {movie.trailer} autoPlay={true} loop />
          <div className="itemInfo" style={{color:"white"}}>
            <div className="icons" >
            <PlayArrowIcon className="icon" />
            <AddIcon className="icon" />
            <ThumbUpOutlinedIcon className="icon" />
            <ThumbDownOffAltOutlinedIcon className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">
          {movie.desc}
          </div>
          <div className="genre">
            {movie.genre}
          </div>
        </div>
          </>
          )}
      </div>
    </Link>
  )
}

export default Listitem