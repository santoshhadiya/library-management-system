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
  const [qury, setQury] = useState("");
  const [loading, setLoading] = useState(true);

  const { mode, BackendURL, gifImg } = useContext(userContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const userRes = await axios.get(`${BackendURL}/user`);
        setUser(userRes.data);
        setFilterUser(userRes.data);

        const adminRes = await axios.get(`${BackendURL}/admin`);
        setAdmin(adminRes.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [BackendURL]);

  useEffect(() => {
    const filter = user.filter((val) => {
      return (
        val && val.name && val.name.toLowerCase().includes(qury.toLowerCase())
      );
    });
    setFilterUser(filter);
  }, [qury, user]);

  return (
    <div className={mode === "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <section className="rg_user">
        <div className="Registered_Users_info" id="Registered_Users_info">
          {loading ? (
            <div style={{display:"flex", textAlign: "center", marginTop: "20px",alignItems:"center", justifyContent:"center" }}>
              <img
                src={gifImg}
                alt="loading..."
                className="loader-gif"
                style={{ width: "30px", height: "30px", marginBottom: "10px" }}
              />
             
            </div>
          ) : (
            <>
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
                  </tr>
                </thead>
                {filterUser.map((val) => (
                  <UserItem
                    key={val.s_id}
                    id={val.s_id}
                    name={val.name}
                    email={val.email}
                    password={val.password}
                  />
                ))}
              </table>

              <h2>Admins </h2>
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                  </tr>
                </thead>
                {admin.map((val) => (
                  <UserItem
                    key={val.a_id}
                    id={val.a_id}
                    name={val.name}
                    email={val.email}
                    password={val.password}
                  />
                ))}
              </table>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default RegisteredUsers;