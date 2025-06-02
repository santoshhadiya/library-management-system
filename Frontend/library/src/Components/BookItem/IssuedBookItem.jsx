import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [isReturn,setIsReturn]=useState(false);
  const navigate = useNavigate();
  /* useEffect(()=>{
    const books = JSON.parse(localStorage.getItem('react_books'));

   books.forEach(function (book) {
      if (book_id == book.b_id) {
        setBook_img_identify(book.b_img)
      }
   });
  },[]) */

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.post("http://localhost:8001/book/img", {
        b_id: book_id,
      });
      setBook_img_identify(response.data);
    };
    fetchdata();
  }, []);

  const validation=()=>{
    setIsReturn((val)=>!val);
  }

  const returnBookValidation=async()=>{
    const response= await axios.post("http://localhost:8001/issue/remove",{
      returnBookId:returnBookId
    })
  if(response.data.val=="ok"){

    //post for get quantity of book
    const bookIddata = await axios.post("http://localhost:8001/book/getid", {
      b_id: book_id,
    });
    // Update book quantity
    const book_qua =Number(bookIddata.data);
    const quaResponse = await axios.post("http://localhost:8001/book/quaplus", {
      b_id: book_id,
      b_quantity: book_qua,
    });

    if (quaResponse.data.val == "ok") {
      
      alert("Book removed successfully!");
      navigate("/"); // Navigate to the home
    }
  }
  else{
    alert("Something went wrong. Please try again.")
  }
  }

  return (
    <>
      <div className="book_info">
        <div className="boxOfReturnBooks">
          <div className="box_img_issued">
            <img
              src={
                book_img_identify
                  ? book_img_identify
                  : "https://static.thenounproject.com/png/3411733-200.png"
              }
              alt="Book Cover"
            />
            <p>
              Return ID: <span className="returnId">{returnBookId}</span>
            </p>
          </div>
          <div>
            <div className="details">
              <p>
                <span>Book ID:</span> {book_id}
              </p>
              <p>
                <span>Student Name:</span> {s_name}
              </p>
              <p>
                <span>Student ID: </span>
                {s_id}
              </p>

              <p>
                <span>Issue Date:</span> {issue_date}
              </p>
              <p>
                <span>Return Date:</span>
                {due_date}
              </p>
              <button onClick={validation}>Return</button>
            </div>
          </div>
        </div>
        {
          isReturn?(<div className="returnFild">
            <input type="text" value={returnBookId} readOnly></input>
            <button onClick={returnBookValidation}>submit</button>
          </div>):""
        }
        
      </div>
    </>
  );
};

export default IssuedBookItem;
