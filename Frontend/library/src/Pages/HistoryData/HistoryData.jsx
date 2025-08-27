import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Nav } from "../../Components/Nav/Nav";
import { userContext } from "../../Context/Context";

// Helper: format date nicely
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper: return correct icon + color for each task
const getTaskIcon = (task) => {
  switch (task) {
    case "add":
      return "fas fa-plus-circle text-green-500";
    case "update":
      return "fas fa-edit text-blue-500";
    case "delete":
      return "fas fa-trash-alt text-red-500";
    case "borrow":
      return "fas fa-book-reader text-yellow-500";
    case "return":
      return "fas fa-undo-alt text-purple-500";
    default:
      return "fas fa-info-circle text-gray-500";
  }
};



const HistoryData = () => {
  const { BackendURL } = useContext(userContext);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch history data
  const getHistData = async () => {
    try {
      const res = await axios.get(`${BackendURL}/hist/get_hist`);
      setHistoryData(res.data);

    } catch (err) {
      console.error("Error fetching history:", err);
      setError("Unable to load history. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistData();

  }, []);

  return (
    <>
     
      <div className="min-h-screen font-sans main_body">
         <Nav />
        <div className="container mx-auto p-6" style={{padding:"10px 100px"}}>
          <h1 className="text-2xl font-bold text-white mb-6">
            Activity History
          </h1>

          {/* Loading state */}
          {loading && (
            <p className="text-center text-gray-500">Loading history...</p>
          )}

          {/* Error state */}
          {error && (
            <p className="text-center text-red-500 bg-red-100 p-3 rounded-lg">
              {error}
            </p>
          )}

          {/* Empty state */}
          {!loading && !error && historyData.length === 0 && (
            <p className="text-center text-gray-500 bg-white p-6 rounded-lg shadow">
              📚 No activity history available yet.
            </p>
          )}

          {/* History list */}
          <div className="space-y-4" style={{margin:"20px 0px"}}>
            {historyData.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 hover:shadow-lg transition "
                style={{padding:"10px 15px", margin:"2px 0px"}}
              >
                {/* Task icon */}
                <div className="text-2xl w-10 text-center">
                  <i className={getTaskIcon(item.task)}></i>
                  {console.log(historyData)}
                </div>

                {/* Main content */}
                {/*   Admin Santosh Hadiya has borrowed this book. */}
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">
                    <span className="capitalize text-sm text-gray-600"></span>{" "}
                    {" "}
                    <span className="text-sm text-gray-600">{item.name} has {item.task} book.</span>{" "}
                    <span className=" text-sm text-gray-600"></span>
                  </p>
                  <p className="text-sm text-gray-600">Book ID: {item.book_id}</p>
                </div>

                {/* Date */}
                <div className="text-right flex gap-20">
                  <p className="text-center w-[60px] capitalize  rounded-2xl text-sm text-gray-600">
                    {item.entity_type} 
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(item.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add FontAwesome link in public/index.html for icons */}
    </>
  );
};

export default HistoryData;
