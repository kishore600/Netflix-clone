import React from 'react'
import "./feature.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import {useEffect,useState} from "react"
import axios from "axios"
const Feature = ({type}) => {
    const [content,setContent] = useState({})
    useEffect(() => {
        const getRandomContent = async ()=>{
            try {
                const res = await axios.get(`/movie/random?type=${type}`,{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc1OWVkMmQ5YzlkYjY1ODQ3YTg5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE0NTg2MSwiZXhwIjoxNjY4NTc3ODYxfQ.eGE_9BYPsLfD4y_vkBOVqeQUQAUyq_qsn7r7XyX7c40"
                      },
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent()
    }, [type])
    console.log(content);
    return (
    <div className="feature">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name = "genere" id = "genere">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
            <img width="100%" src={content.imgSm} alt="" />
            <span className="desc">
                {content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoIcon />
                    <span>Info</span>
                </button>
            </div>
        </div> 
    </div>
  )
}

export default Feature