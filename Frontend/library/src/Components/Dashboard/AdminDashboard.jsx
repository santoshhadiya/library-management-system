import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <h2>Admin Dashboard</h2>
      <div className="dashboard">
        <a>
          <Link to="/books">
            <div className="card green">
              <i className="fas fa-book"></i>
              <p>Books Listed</p>
            </div>
          </Link>
        </a>
        <a>
          <Link to="/issue">
            <div className="card blue">
              <i className="fas fa-list"></i>
              <p>Issue Book</p>
            </div>
          </Link>
        </a>
        <a>
          <Link to="/authlisted">
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
        <a>
          <Link to="/regusers">
            <div className="card red">
              <i className="fas fa-users"></i>
              <p>Registered Users</p>
            </div>
          </Link>
        </a>

        <a>
          <Link to="/issuedbooks">
            <div className="card green">
              <i className="fa-solid fa-circle-up"></i>
              <p>Issued Books</p>
            </div>
          </Link>
        </a>
        <div className="card yellow">
          <i className="fas fa-recycle"></i>
          <p>Books Returned</p>
          <div className="coming-soon">Coming Soon</div>
        </div>
        <a>
          <Link to="/addbook">
            <div className="card green">
              <i className="fa-solid fa-plus"></i>
              <p>Add Book</p>
            </div>
          </Link>
        </a>

        <a>
          <div className="card blue">
            <i className="fas fa-folder"></i>
            <p>Remove All Books</p>
            <div className="coming-soon">Coming Soon</div>
          </div>
        </a>

      </div>
    </>
  );
};

export default AdminDashboard;
