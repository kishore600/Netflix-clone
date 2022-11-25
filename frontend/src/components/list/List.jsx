import React, { useRef,useState } from 'react'
import "./list.scss"
import ListItem from '../listItem/Listitem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const List = ({lists}) => {
  const [slideNumber, setslideNumber] = useState(0)
  const [isMoved, setisMoved] = useState(false)
  const listRef = useRef()

  const handleClick = (direction) =>{
    setslideNumber(true)
    setisMoved(true)
    let distance = listRef.current.getBoundingClientRect().x-50
    if(direction === "left" && slideNumber > 0){
      setslideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${230+distance}px)`
    }else if(direction === "right" && slideNumber < 5){
      setslideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${-230+distance}px)`
    }
  }
  return (
    <div className="list">
        <span className="listTitle">
            {lists.title}
        </span>
        <div className="wrapper">
            <ArrowBackIosIcon className="sliderArrow left" onClick={()=>handleClick("left")} style={{display : !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
              {lists.content.map((item,i)=>(
                <ListItem index={i} item={item}/>
              ))}
            </div>
            <ArrowForwardIosIcon className="sliderArrow right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List