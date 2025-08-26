import { useContext, useRef, useState } from "react";
import { Nav } from "../../Components/Nav/Nav";
import "./IssueBook.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/Context";
import axios from "axios";

function generateUniqueText() {


  const text = "qwer1tyuiopa661sd@#$fghjkl$zxcvb2345@637nmQWhd$kERTYUIOPAS731DFGHJKLZ649XCVBNM123456789@#$";
  const randomNumber = Math.floor(Math.random() * 1000);
  const startIndex = Math.floor(Math.random() * (text.length - 10));
  const randomSubstring = text.substring(startIndex, startIndex + 10);
  const uniqueText = randomSubstring + randomNumber;

  return uniqueText;
}


const IssueBook = () => {
  const { user, mode, BackendURL } = useContext(userContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const studentID = useRef();
  const bookID = useRef();
  const issueDate = useRef();
  const dueDate = useRef();

  const formvalidation = async (e) => {
    e.preventDefault();
    setLoading(true);

    const id = studentID.current.value.trim();
    const bookIdValue = bookID.current.value.trim();
    const issue = issueDate.current.value;
    const due = dueDate.current.value;

    // Basic validation
    if (!id || !bookIdValue || !issue || !due) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    // Validate due date
    if (new Date(due) < new Date(issue)) {
      alert("Due date must be after the issue date.");
      setLoading(false);
      return;
    }
    //post for get quantity of book
    const bookIddata = await axios.post(`${BackendURL}/book/getid`, {
      b_id: bookIdValue,
    });
    // Update book quantity
    const book_qua = Number(bookIddata.data);
    if (book_qua <= 0) {
      alert("This Book Is Not Available Due To Inseficiant Quntity");
      return;
    }

    // Fetch user data
    const userData = await axios.post(`${BackendURL}/user/userid`, {
      _id: id,
    });
    if (userData) {
      alert(userData)
    }
    if (!userData.data.name) {
      alert("User ID not found!");
      setLoading(false);
      return;
    }

    //rendom text for return
    const returnBookId = generateUniqueText();

    const { name, email, department } = userData.data;

    // Issue the book
    const response = await axios.post(`${BackendURL}/issue`, {
      name,
      s_id: id,
      email,
      department,
      b_id: bookIdValue,
      issue_date: issue,
      due_date: due,
      returnBookId: returnBookId,
    });

    if (response.data.val === "null") {
      alert("Book ID not found!");
      setLoading(false);
      return;
    }


    const quaResponse = await axios.post(`${BackendURL}/book/qua`, {
      b_id: bookIdValue,
      b_quantity: book_qua,
    });

    if (quaResponse.data.val == "ok") {
      setLoading(false);
      alert("Book issued successfully!");
      navigate("/issuedbooks"); // Navigate to the issued books page
    }
    // Clear form fields
    studentID.current.value = "";
    bookID.current.value = "";
    issueDate.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className={mode == "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <section className="isuue_section">
        <div className="issue_book">
          <h2>Issue Book</h2>
          <form onSubmit={formvalidation}>
            <div className="form_section">
              <h3>Student Information</h3>
              <div className="field">
                <p>Student ID/Enrollment Number</p>
                <input
                  ref={studentID}
                  type="text"
                  placeholder="Enter student ID/enrollment number"
                  required
                />
              </div>
            </div>
            <div className="form_section">
              <h3>Book Information</h3>
              <div className="field">
                <p>Book ID</p>
                <input
                  ref={bookID}
                  type="text"
                  placeholder="Enter book ID"
                  required
                />
              </div>
            </div>
            <div className="form_section">
              <h3>Issuing Details</h3>
              <div className="field">
                <p>Date of Issue</p>
                <input ref={issueDate} type="date" required />
              </div>
              <div className="field">
                <p>Due Date for Return</p>
                <input ref={dueDate} type="date" required />
              </div>
            </div>
            <button id="issueBookBtn" className="submit_btn" type="submit">
              {loading ? "Issuing..." : "Issue Book"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default IssueBook;
