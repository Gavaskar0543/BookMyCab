import React,{useState} from "react";
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Header from "./Header";
import {Booking, Home,SelectCab} from '../Pages'
function App() {
   //state for pickup
   const [pickup,setPickup] = useState('');
   //state for drop
   const [drop,setDrop] = useState('');
   //to select cab type
   const [cab,setCab] = useState('');
   //selectRide Type
   const[ride,setRide] = useState('');
   //select BookedCab
   const[booked,setBooked] =useState({});
const router = createRoutesFromElements(
  <>
   

   <Route path="/" element={<Home
    pickup={pickup}
    setPickup={setPickup}
    drop={drop}
    setDrop={setDrop}
    cab={cab}
    setCab={setCab}
    ride={ride}
    setRide={setRide}
   
   />}/>
      <Route path="/selectCab" element={<SelectCab 
      
      pickup={pickup}
      drop={drop}
      cab={cab}
      ride={ride}
      setBooked={setBooked}
      
      />}/>
      <Route path="/booking" element={<Booking
       booked={booked} 
      pickup={pickup}
      drop={drop}
      cab={cab}
      
      />}/>
  </>
);
const route = createBrowserRouter(router);
  return (
    
     <>
    <Header/>
   <RouterProvider router={route}/>
     </>
  );
}

export default App;
