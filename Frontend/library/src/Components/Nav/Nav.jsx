import React, { useContext } from "react";
import { userContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import Header from "./Header";

export const Nav = () => {
  const { user, activeLink } = useContext(userContext);

  return (
    <>
      <Header />
      <nav>
        <ul>
          <Link to="/">
            <li>
              <a href="#">Dashboard</a>
            </li>
          </Link>
          <Link to="/books">
            <li className={activeLink === "books" ? "Active_class" : ""}>
              <a href="#">Books Listed</a>
            </li>
          </Link>
          <Link to="/authlisted">
            <li>
              <a href="#">Authors</a>
            </li>
          </Link>
          <li>
            <a href="#">Categories</a>
          </li>
          <Link to="/issue">
            <li>
              <a href="#">Issue Books</a>
            </li>
          </Link>
          <Link to="/regusers">
            <li>
              <a href="#">Reg Students</a>
            </li>
          </Link>
          <Link to="/issuedbooks">
            <li>
              <a href="#">Issued Books</a>
            </li>
          </Link>
          {/* ✅ check role instead of user string */}
          {user?.role === "admin" && (
            <>
              <Link to="/addbook">
                <li>
                  <a href="#">Add Book</a>
                </li>
              </Link>

              <li>
                <a href="#">Books Return</a>
              </li>
              <li>
                <a href="#">Remove All Books</a>
              </li>
              <li>
                <a href="#">Change Password</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
