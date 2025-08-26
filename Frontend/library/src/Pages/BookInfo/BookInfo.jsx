import React, { useContext } from 'react'
import { Nav } from '../../Components/Nav/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/Context'
import axios from 'axios'

const BookInfo = () => {

const {user,BackendURL}=useContext(userContext)
const navigate=useNavigate()
  const location = useLocation();
  const { img, title, author, desc, que, id } = location.state || {}

  
function generateUniqueText() {


  const text = "qwer1tyuiopa661sd@#$fghjkl$zxcvb2345@637nmQWhd$kERTYUIOPAS731DFGHJKLZ649XCVBNM123456789@#$";
  const randomNumber = Math.floor(Math.random() * 1000);
  const startIndex = Math.floor(Math.random() * (text.length - 10));
  const randomSubstring = text.substring(startIndex, startIndex + 10);
  const uniqueText = randomSubstring + randomNumber;

  return uniqueText;
}
 const returnBookId = generateUniqueText();

 const IsConfirmIssue=()=>{
  if(confirm("Do you want to borrow this book ?")){
    handleBookIssue()
  }
 }
  const handleBookIssue = async() => {
    const response = await axios.post(`${BackendURL}/issue`, {
      name:user.name,
      s_id: user.id,
      email:user.email,
      department:user.department,
      b_id: id,
      issue_date: Date.now(),
      due_date: Date.now()+10,
      returnBookId: returnBookId,
    });

    if (response.data.val === "null") {
      alert("Book ID not found!");
    
      return;
    }


    const quaResponse = await axios.post(`${BackendURL}/book/qua`, {
      b_id: id,
      b_quantity: que,
    });

    if (quaResponse.data.val == "ok") {
     
      alert("Book issued successfully!");
      navigate("/issuedbooks"); // Navigate to the issued books page
    }
    // C
  }
  return (
    <div className="main_body">
      <Nav />
      <main className="  min-h-[500px] flex items-center justify-center">
        <div className="w-full m-h-[600px] backdrop-blur-xl rounded-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg  ">
            {title}
          </h2>
          <div className="flex flex-row md:flex-row items-center gap-10">
            <div className="relative flex-shrink-0">
              <img
                src={img}
                alt={title}
                className="w-[300px] h-[450px]  object-fill rounded-xl shadow-2xl"

              />
              <div className="absolute -top-4 -right-4 bg-indigo-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-center shadow-lg">
                <div className='leading-tight'>
                  <span className="font-bold text-2xl">{que}</span>
                  <span className='block text-xs'>left</span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center md:items-start text-center md:text-left space-y-6 min-h-[300px]  justify-between">
              <div>
                <p className="text-2xl text-indigo-200">
                  by <span className="font-bold text-white">{author}</span>
                </p>
                <p className="text-indigo-100 leading-relaxed max-w-prose">
                  {desc}
                </p>
                <p className="text-sm text-indigo-300 font-mono pt-4">
                  ID: {id}
                </p>
              </div>
              <button
                onClick={IsConfirmIssue}
                className="mt-auto bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg  transition-all duration-300 transform h-[50px] w-[10px]">
                Borrow Book
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

}

export default BookInfo