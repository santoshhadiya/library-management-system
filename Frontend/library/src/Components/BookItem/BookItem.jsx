import React from "react";

function BookItem({ img, title, author, desc, que, id }) {
  return (
    <>
      <div className="book_box">
        <div className="box_img">
        <img src={img} ></img>
        </div>
        <div className="book_details">
          <p className="book_title" id="book_title">
            {title}
          </p>
          <p className="book_author">Author: {author}</p>
          <p className="book_description">{desc}</p>
          <p className="book_quantity">Quantity: {que}</p>
          <p>Book ID: {id}</p>
        </div>
      </div>
    </>
  );
}

export default BookItem;
