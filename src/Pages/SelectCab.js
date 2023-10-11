import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
export default function SelectCab({pickup,
  drop,
  cab,
  ride}) {
    const navigate = useNavigate();
 let Economy = [{
  price:'600',
  img:'',
 },
{price:'560',
img:'',
},
{
  price:'700',
  img:''
},{
  price:'630',
  img:''
}];
const handleBookNow = () =>{
  navigate('/booking');
  
}
  
  return (
   
   <MainDiv className='expand-lg'>
    <div className='box' style={{filter:"none"}}>
     <div className='d-flex justify-content-center text-dark align-items-center'>
      <div>
        <p className='text-center box fs-2 text-primary fw-bolder'>Available Cabs for <span className='text-warning'>{cab}</span></p>
      </div>
     </div>
     <div className='d-flex flex-wrap justify-content-around align-items-center'>
    {Economy.map((data) =>(
  <div class="card p-2 m-2" style={{width: "18rem",zIndex:10}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 className="card-title">Class:{cab}</h5>
<p className='card-text'>Pickup Location:{pickup}</p>
<p className='card-text'>Drop Location:{drop}</p>  
<p className='card-text'>Type:{ride}</p>
<p className='card-text'>Price:&#8377;{data.price}</p>  </div>
<div className='d-flex align-items-center justify-content-center'>
  <button className='btn btn-dark text-white' onClick={handleBookNow}>Book Now</button>
</div>

</div>
))}
     </div>


    </div>
   </MainDiv>
  

  )
}


const MainDiv = styled.div`
height:84vh;
background-image:none;
background-size:cover;
background-repeate:no-repeat;
background-position:center;
filter: grayscale(30%);


`
