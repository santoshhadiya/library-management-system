import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/Context";

const StudentDashboard = () => {
  const {user}=useContext(userContext)
  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <div className="dashboard">
        <a>
          <Link to="/books">
            <div className="card green">
              <i className="fas fa-book"></i>
              <p>Books</p>
            </div>
          </Link>
        </a>
        {/* <a>
          <Link to="/issue">
            <div className="card blue">
              <i className="fas fa-list"></i>
              <p>Issue Book</p>
            </div>
          </Link>
        </a> */}
        <a>
          <Link to="/issuedbooks">
            <div className="card green">
              <i className="fa-solid fa-circle-up"></i>
              
              <p>{user.role=="user"?"Your":""} Issued Books</p>
            </div>
          </Link>
        </a>
        <a>
          <Link to='/authlisted'>
            <div className="card green" id="Authors_Listed">
              <i className="fas fa-user"></i>
              <p>Authors Listed</p>
            </div>
          </Link>
        </a>
        <a>
          <div className="card blue">
            <i className="fas fa-folder"></i>
            <p>Listed Categories</p>
            <div className="coming-soon">Coming Soon</div>
          </div>
        </a>
       
      </div>
    </>
  );
};

export default StudentDashboard;
