import { useContext, useEffect, useState } from 'react';
import { Nav } from '../../Components/Nav/Nav'
import './AuthListed.css'
import AuthorItem from '../../Components/AuthorItem/AuthorItem';
import axios from "axios";
import { userContext } from '../../Context/Context';

const AuthListed = () => {
const {MongoURL,mode}=useContext(userContext)
  const [author,setAuthor]=useState([]);

  useEffect(()=>{
    /* const books = JSON.parse(localStorage.getItem("react_books")) || [];
    setAuthor(books);   */

   axios.get(MongoURL)
    .then((res)=>{setAuthor(res.data)})
     .catch((err)=>{console.log(err)});
    
  },[])
  
  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
  <Nav/>
    <section className='auth'>
      <h2>Authors Listed</h2>
      <div class="Authors_Listed" id="Authors_Listed">
        <table>
        {
          author.map((auth)=>{
            return <AuthorItem key={auth.b_id} author={auth.b_author} name={auth.b_name} id={auth.b_id}/>
          })
        }
        </table>
      </div>
    </section>
    </div>
  )
}

export default AuthListed