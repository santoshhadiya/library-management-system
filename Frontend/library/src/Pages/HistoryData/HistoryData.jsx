import React, { useEffect, useState, useContext } from "react";
import { Nav } from "../../Components/Nav/Nav";
import axios from "axios";
import { userContext } from "../../Context/Context";

const HistoryData = () => {
  const { BackendURL } = useContext(userContext);
  const [add, setAdd] = useState([]); // ✅ default empty array

  const getAddHistData = async () => {
    try {
      const res = await axios.get(`${BackendURL}/hist/get_add_hist`);
      setAdd(res.data); // ✅ store response data
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };


  useEffect(() => {
    getAddHistData();
  }, []);

  return (
    <>
      <Nav />
      <div className="p-4">
        {add.length > 0 ? (
          add.map((item, index) => (
            <p key={index} className="text-gray-700">
              {JSON.stringify(item)}
            </p>
          ))
        ) : (
          <p className="text-gray-500">No history available</p>
        )}
      </div>
    </>
  );
};

export default HistoryData;
