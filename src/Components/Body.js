import React from 'react'
import styled from 'styled-components'

export default function Body() {
  return (
    <MainDiv>
      <div >
        <p className='text-center fs-4 fw-bolder'>Why We?</p>
      </div>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Safety and Security</h5>
        <p class="card-text">Your safety is our top priority. Our cab service is equipped with the latest security features and stringent safety measures to ensure you have a worry-free journey</p>
      </div>
    </div>
  </div>
</div>
 
</MainDiv>
  )
}

const MainDiv = styled.div`
height:90vh;
margin-top:10%;
`
