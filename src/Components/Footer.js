import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <MainDiv>
          
          
      <div className="container">
        <div className="">
          <div className="">
            <h3>Contact Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@yourcabservices.com</p>
          </div>
          <div className="">
            <h3>Our Services</h3>
            <ul>
              <li>Ride Booking</li>
              <li>Airport Transfers</li>
              <li>Corporate Travel</li>
              <li>Tours and Sightseeing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Partnership</h3>
            <p>Become a Partner Driver</p>
            <p>Business Collaborations</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Cab Services. All rights reserved.</p>
        </div>
      </div>
   
      
    

    </MainDiv>
  )
}
const MainDiv = styled.div`

`
