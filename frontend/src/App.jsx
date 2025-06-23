import React, { useEffect } from "react";
import axios from "./api/Axiosconfig"; 
import {asyncgetuser} from './store/userActions'
import { useDispatch, useSelector } from "react-redux";
import Maintoutes from "./routes/Maintoutes";

const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state)
  console.log(data.user.data)

  useEffect(() => {
    dispatch(asyncgetuser())
  }, []);

  return <div>
    <Maintoutes/>
  </div>;
};

export default App;
