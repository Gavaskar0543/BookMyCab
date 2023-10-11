import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PassangerContext } from "../Context";
import Body from '../Components/Body';

import Footer from "../Components/Footer";
export default function Home({
  pickup,
  setPickup,
  drop,
  setDrop,
  cab,
  setCab,
  ride,
  setRide,}
) {
  const navigate = useNavigate();
  //to handle the type of ride
  const [activeDiv,setActiveDiv] = useState(false);
  //handling inputs for pickup and drop
  const handlePickUpChange = (e) => {
    setPickup(e.target.value);
  };
  const handleDropChange = (e) =>{
    setDrop(e.target.value);
  }
  const handleCabType=(e) =>{
    setCab(e.target.value);
  }

  const handleDivClick = (index) => {
    setActiveDiv(index);
    let rideType = opt[index];
    setRide(rideType);
  };
  const handleCabBooking = () =>{
    if(cab === '' || ride === '' || drop === ''|| pickup === ''){
      alert('something missing');
      return;
    }
    else{
      navigate('/selectCab');
    
    }
  }
  const opt = ["RideNow", "Rent By Hours", "Advance Booking"];
  return (

    <>
    <PassangerContext.Provider value={{ride,cab,pickup,drop}}>
    <MainDiv className="expand-lg">
      <div className="card-group" style={{ marginTop: "12rem", marginLeft: "4rem", zIndex: '10' }}>
        <div className="card">
          <div className="card-header">
            <p className="fs-2 fw-medium text-centr card-title fw-2 text-center">BookNow
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                20%off
              </span>
            </p>

          </div>
          <div className="card-body">
            <div className="container w-full d-flex align-items-center justify-content-between">
              {opt.map((text, index) => (
                <div
                  key={index}
                  className={`div-item d-flex align-items-center justify-content-center ${activeDiv === index ? 'active fw-semibold text-warning' : ''}`}
                  onClick={() => handleDivClick(index)}
                >
                  <p className="fs-6 fw-medium px-2">{text}</p>
                </div>
              ))}
            </div>
            <div className=" d-flex justify-content-around mt-4 ">
              <div class="input-group mb-3">
                <div class="form-floating px-2">
                  <input type="text" class="form-control fw-medium" id="floatingInputGroup1" placeholder="Enter Pickup Location"  value={pickup}
        onChange={handlePickUpChange} />
                  <label for="floatingInputGroup1">PickUp</label>
      
                </div>
              </div>
              <div>
                <p className="fs-1" style={{ color: 'grey' }}>|</p>
              </div>
              <div class="input-group mb-3">
                <div class="form-floating px-2">
                  <input type="text" class="form-control fw-medium" id="floatingInputGroup2" onChange={handleDropChange} value={drop} placeholder="Enter Drop Location" />
                  <label for="floatingInputGroup2">Drop</label>
                </div>

              </div>
            </div>
            <div>
              <div className="mb-2">
                <p className="fs-6 fw-semibold text-center">Select Cab Type</p>
              </div>
              <div className="d-flex  justify-content-around align-items-center mb-4">
              <div class="form-check">
  <input type="radio" class="form-check-input" id="regularRadio" name="radioOption" onChange={handleCabType} value="Economy"/>
  <label class="form-check-label" for="regularRadio">Economy</label>
</div>
<div class="form-check">
  <input type="radio" class="form-check-input" id="regularRadio" name="radioOption"  onChange={handleCabType} value="Premium,"/>
  <label class="form-check-label" for="regularRadio">Premium</label>
</div>
<div class="form-check">
  <input type="radio" class="form-check-input" id="regularRadio" name="radioOption"  onChange={handleCabType} value="Luxury"/>
  <label class="form-check-label" for="regularRadio">Luxury</label>
</div>
              </div>

            </div>
            <div className="d-flex justify-content-center align-item-center mt-2 mb-3">
              <button className="btn btn-dark text-white fw-semibold rounded " onClick={handleCabBooking}>Search cab</button>
            </div>
          </div>
        </div>
      </div>

    </MainDiv>
    </PassangerContext.Provider>
   <div>
   <Body/>
   </div>
   <div>
        <Footer />
      </div>

    </>
  );
}

const MainDiv = styled.div`
height:90vh;
display:flex;
align-items:center;
background-image:url('../Assets/banner1.jpg');
background-size:cover;
background-repeate:no-repeat;
background-position:center;


  .active {
    transition: border 0s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-bottom: 2px solid grey;
    border-radius: 10px;
  }
  
  


`