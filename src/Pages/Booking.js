import React, { useState } from 'react'
import styled from 'styled-components'
export default function Booking({booked,cab,pickup,drop}) {
  const [phone, setPhone] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  
 
  const handlePassenger = (e) => {
    setPassengerCount(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
   
    const handleConfirmBooking = () =>{
      if(phone === '' || phone.length <10 || passengerCount === ''){
        alert('Enter valid Credintial ')
      }
      else{
        alert('Booking Confirm Keep OTP Ready Recived to Phone no.',phone);
      }
    }

  return (
   <MainDiv>
   <div>
    <div>
      <p className='text-center mt-2 fs-2 fw-semibold'> Review Booking</p>
    </div>
    <div className=' container  d-flex flex-wrap justify-content-around align-items-center'>
      <div  className='p-2 mb-2'>
      <div className="card" style={{ width: "18rem" }} >
    <img src={booked.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Class:{cab} </h5>
      <p className='card-text'>Pickup Location:{pickup} </p>
      <p className='card-text'>Drop Location:{drop} </p>
      <p className='card-text'>ETA:{booked.ETA} </p>
      <p className='card-text'>Price: &#8377;{booked.price}</p>
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
  <input type="text" class="form-control" id="floatingInput" value={phone}  onChange={handlePhone} placeholder="Phone number"/>
  <label for="floatingInput">Phone Number</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control"  value={passengerCount} onChange={handlePassenger} id="floatingInput" placeholder="Passenger"/>
  <label for="floatingInput">Number of Passenger</label>
</div>
    <div class="form-group">
     <p className='fs-6 fw-medium text-center'>Payment Type</p>
    <select class="form-control" id="paymentType" name="paymentType">
    <option value="cash">Cash</option>
          <option value="online">Online</option>
        </select>
    </div>
     <div className='mt-4 d-flex justify-content-center align-item-center'>
      <button className='btn btn-dark text-white' onClick={handleConfirmBooking}>Confirm Booking</button>
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
