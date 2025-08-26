import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BookItem({ img, title, author, desc, que, id }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={`book_box cursor-pointer ${que <= 0 ? "opacity-60 pointer-events-none" : ""}`}
        onClick={() => {
          if (que > 0) {
            navigate("/bookinfo", {
              state: { img, title, author, desc, que, id }
            });
          }
        }}
      >
        <p className="box-img">
          <img src={img} className="main_show_book_img"></img>
        </p>
        <div className="book_details">
          <p className="book_title" id="book_title">
            {title}
          </p>
          <p className="book_author">Author: {author}</p>

          <p className="book_quantity">Quantity: {que}</p>

          {
            que<=0 ? <p className="text-red-700 font-extrabold">Out Of Stock !</p>:""
          }

        </div>
      </div>

    </>

  );
}

export default BookItem;
