import React from "react";
import styled from "styled-components";
export default function Home() {
  return (
    <MainDiv className="expand-lg">
      <div className="w-50 border expand-lg  border-4">
        <div>
            <p className="fs-3 fw-medium w-full text-center text-warning">Ride Now</p>
        </div>
        <div className="w-100 d-flex justify-content-around">
        <div class="input-group mb-3">
  
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Enter Pickup Location"/>
    <label for="floatingInputGroup1">PickUp Location</label>
  </div>
</div>
<div class="input-group mb-3">
 
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Enter Drop Location"/>
    <label for="floatingInputGroup1">Drop Location</label>
  </div>
</div>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <button className="btn btn-dark">Ride now</button>
        </div>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div `
height:80vh;
display:flex;
align-items:center;
background-image:url('../Assets/banner1.jpg');
background-size:cover;
background-repeate:no-repeat;
background-position:center;
`