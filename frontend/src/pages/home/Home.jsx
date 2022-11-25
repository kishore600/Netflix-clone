import React,{useState,useEffect} from 'react'
import './home.scss';
import Navbar from  '../../components/navbar/Navbar'
import Feature from '../../components/feature/Feature'
import List from '../../components/list/List'
import axios from "axios";

const Home = ({type}) => {
  const [lists,setList] = useState([])
  const [genre,setGenre] = useState(null)

  useEffect(()=>{
    const getRandomList = async ()=>{
      try {
        const res = await axios.get(`list${type ? "?type="+type : ""}${genre ? "genre="+genre:""}`,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc1OWVkMmQ5YzlkYjY1ODQ3YTg5NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE0NTg2MSwiZXhwIjoxNjY4NTc3ODYxfQ.eGE_9BYPsLfD4y_vkBOVqeQUQAUyq_qsn7r7XyX7c40"
          }
        })      
        console.log(res);
        setList(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getRandomList()
  },[type,genre])
  return (
    <div className="home">
        <Navbar />
        <Feature type={type} />
       {lists.map((list)=>(
        <List lists={list} />
       ))}
    </div>
  )
}

export default Home