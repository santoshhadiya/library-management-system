import { useContext, useEffect, useState } from "react";
import { Nav } from "../../Components/Nav/Nav";
import UserItem from "../../Components/UserItem/UserItem";
import "./RegisteredUsers.css";
import axios from "axios";
import { userContext } from "../../Context/Context";

const RegisteredUsers = () => {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [qury, setQury] = useState([]);

  const {mode,BackendURL}=useContext(userContext);
  useEffect(() => {
    /* const userData = JSON.parse(localStorage.getItem("issueBooksData")) || [];
    setUser(userData);
 */
    const fetchdata = async () => {
      await axios
        .get(`${BackendURL}/user`)
        .then((res) => {
          setUser(res.data), setFilterUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get(`${BackendURL}/admin`)
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const filter = user.filter((val) => {
      return (
        val && val.name && val.name.toLowerCase().includes(qury.toLowerCase())
      );
    });
    setFilterUser(filter);
  }, [qury]);
  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
      <Nav />
      <section className="rg_user">
        <div class="Registered_Users_info" id="Registered_Users_info">

          <div className="search_books">
            <input
              type="text"
              id="search_books_input"
              placeholder="Search"
              onChange={(e) => setQury(e.target.value)}
            />
          </div>
          <h2>Students </h2>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                {/* <td>Password</td> */}
              </tr>
            </thead>
            {filterUser.map((val) => {
              return (
                <UserItem
                  key={val.s_id}
                  id={val.s_id}
                  name={val.name}
                  email={val.email}
                  password={val.password}
                />
              );
            })}
          </table>

          <h2>Admins </h2>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
               {/*  <td>Password</td> */}
              </tr>
            </thead>
            {admin.map((val) => {
              return (
                <UserItem
                  key={val.s_id}
                  id={val.a_id}
                  name={val.name}
                  email={val.email}
                  password={val.password}
                />
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
};

export default RegisteredUsers;
