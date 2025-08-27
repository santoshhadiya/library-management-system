import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/Context";

const IssuedBookItem = ({
  due_date,
  issue_date,
  s_department,
  s_email,
  s_id,
  s_name,
  book_id,
  returnBookId,
}) => {
  const [book_img_identify, setBook_img_identify] = useState("");
  const [isReturn, setIsReturn] = useState(false);
  const navigate = useNavigate();

  const { BackendURL, user } = useContext(userContext)


  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.post(`${BackendURL}/book/img`, {
        b_id: book_id,
      });
      setBook_img_identify(response.data);
    };
    fetchdata();
  }, []);

  // date strings to YYYY-MM-DD
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    // Format as YYYY-MM-DD
    return date.toISOString().split("T")[0];
  };


  const validation = () => {
    setIsReturn((val) => !val);
  }

  const bookReturnConfirm = () => {
    if (confirm("Do You want to return this book ?")) {
      returnBookValidation()
    }
  }

  const returnBookValidation = async () => {
    validation()
    const response = await axios.post(`${BackendURL}/issue/remove`, {
      returnBookId: returnBookId
    })
    if (response.data.val == "ok") {

      //post for get quantity of book
      const bookIddata = await axios.post(`${BackendURL}/book/getid`, {
        b_id: book_id,
      });
      // Update book quantity
      const book_qua = Number(bookIddata.data);
      const quaResponse = await axios.post(`${BackendURL}/book/quaplus`, {
        b_id: book_id,
        b_quantity: book_qua,
      });



      if (quaResponse.data.val == "ok") {

        alert("Book removed successfully!");
        navigate("/"); // Navigate to the home

        const res = await axios.post(`${BackendURL}/hist/return`, {
          entity_id: user.id,
          entity_type: user.role,
          book_id: book_id,
          date: Date.now(),
          task: "return",
          name: user.name,
        })
      }
    }
    else {
      alert("Something went wrong. Please try again.")
    }

  }

  return (
    <>
      <div className="book_info">
        <div className="boxOfReturnBooks">
          <div className="box_img_issued">
            <img
              src={book_img_identify ? book_img_identify : "https://static.thenounproject.com/png/3411733-200.png"}
              alt="Book Cover"
            />

          </div>
          {
            user.role == "user" ? (<div className="details">
              <p><span>From:</span> {formatDate(issue_date)}</p>
              <p><span>To:</span> {formatDate(due_date)}</p>
              <button onClick={bookReturnConfirm}>Return</button>
            </div>) :
              (<div className="details">
                <p><span>Book ID:</span> {book_id}</p>
                <p> <span>Student Name:</span> {s_name} </p>
                <p> <span>Student ID: </span> {s_id}</p>
                <p> <span>Issue Date:</span> {formatDate(issue_date)}</p>
                <p><span>Return Date:</span> {formatDate(due_date)}</p>
                
              </div>)
          }



        </div>


      </div>
    </>
  );
};

export default IssuedBookItem;
