import React, { useEffect } from "react";
import axios from "./api/Axiosconfig"; 

const App = () => {
  const getProducts = async () => {
    try {
      const res = await axios.get("/users"); 
      console.log(res.data); 
    } catch (err) {
      console.error("Error fetching users:", err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div>App</div>;
};

export default App;
