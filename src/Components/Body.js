import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
export default function Body() {
  return (
    <><MainDiv>
      <div className='px-2 py-2'>
        <p className='text-center fs-4 fw-bolder'>Why We?</p>
      </div>
      <div>
        <div class="card mb-4" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../Assets/safety.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Safety and Security</h5>
                <p class="card-text">Your safety is our top priority. Our cab service is equipped with the latest security features and stringent safety measures to ensure you have a worry-free journey</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4" style={{ maxWidth: "540px", float: "right" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../Assets/Hygine.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Cleanliness and Well-being Pledge</h5>
                <p class="card-text">Travel confidently in a Hygiene Cab, where our unwavering commitment to cleanliness and advanced sanitization procedures ensure that every ride is a safe and hygienic experience, regardless of the time of day.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="card mb-3" style={{ maxWidth: "540px", float: 'left', marginTop: "7rem" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../Assets/savemoney.jpg" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Affordable Excellence Cab Service</h5>
                <p class="card-text">Experience the affordability and excellence of our cab services, making your journeys both cost-effective and exceptional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDiv>
    </>

  )
}

const MainDiv = styled.div`
height:90vh;
margin-top:10%;
`
