import { useContext, useEffect, useState } from 'react';
import { Nav } from '../../Components/Nav/Nav';
import './AuthListed.css';
import AuthorItem from '../../Components/AuthorItem/AuthorItem';
import axios from "axios";
import { userContext } from '../../Context/Context';
/* 
const gifImg = "https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif"; */

const AuthListed = () => {
  const { MongoURL, mode,gifImg } = useContext(userContext);
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(MongoURL)
      .then((res) => {
        setAuthor(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [MongoURL]);

  return (
    <div className={mode === "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <section className='auth'>
        <h2>Authors Listed</h2>
        <div className="Authors_Listed" id="Authors_Listed">
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img
                src={gifImg}
                alt="loading..."
                className="loader-gif"
                style={{ width: "30px", height: "30px", position: "relative" }}
              />
             
            </div>
          ) : (
            <table>
              {author.map((auth) => (
                <AuthorItem key={auth.b_id} author={auth.b_author} name={auth.b_name} id={auth.b_id} />
              ))}
            </table>
          )}
        </div>
      </section>
    </div>
  );
}

export default AuthListed;