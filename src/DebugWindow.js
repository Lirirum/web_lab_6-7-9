import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const DebugWindow = () => {
  const location = useLocation();
  const [history, setHistoty]= useState([]);
  const [date,setDate]= useState([]);

  useEffect(() => {
   setHistoty(prevHistory=>[...prevHistory,location]);
   setDate(new Date());
   console.log("22");

  },[location.pathname]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, padding: '10px', background: '#fff', border: '1px solid #ddd',fontSize:"16px",fontWeight:"500" }}>
      <h3>Debug Window</h3>
      <p>Current Path: {location.pathname}</p>
      <p>History Path: </p>{history.map((item,index)=>(

        <p>
        {date.toLocaleTimeString()}:{item.pathname}

        </p>
      ))}
    </div>
  );
};

export default DebugWindow;