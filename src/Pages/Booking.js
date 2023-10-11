import React from 'react'
import styled from 'styled-components'
export default function Booking() {
  return (
   <MainDiv>
   <div>
    <div>
      <p className='text-center mt-2 fs-2 fw-semibold'>Book With Credentials</p>
    </div>
    <div className=' container  d-flex flex-wrap justify-content-around align-items-center'>
      <div  className='p-2 mb-2'>
      <div className="card" style={{ width: "18rem" }} >
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Class: </h5>
      <p className='card-text'>Pickup Location: </p>
      <p className='card-text'>Drop Location: </p>
      <p className='card-text'>Type: </p>
      <p className='card-text'>Price: &#8377;</p>
    </div>
  </div>
      </div>
      <div className='p-2 mb-2'>
        <div>
        <p className='fs-2 fw-bolder'> Enter your Details</p>
      </div>
      <hr/>
      <div>
      <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Phone Number</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
      </div>
      </div>
    </div>

   </div>

   </MainDiv>

  )
}

const MainDiv = styled.div`
height:84vh;
`;
