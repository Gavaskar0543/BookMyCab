import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
export default function SelectCab({pickup,
  drop,
  cab,
  ride,
setBooked}) {
    const [carList,setCarList] = useState([]);
   
    const navigate = useNavigate();
    useEffect(() => {
      let data = [];
  
      let imagePathEconomy = 'https://cdn-kgelb.nitrocdn.com/ZjDZscJXDYigIUYdvVdZBKwDQxBJmkBW/assets/images/optimized/wp-content/uploads/2016/05/9cefc3ade170bca82cfd0990df2275f4.tata-indica.jpg';
      let imagePathPremium = 'https://images.jdmagicbox.com/comp/tirupur/z6/9999px421.x421.170810154647.l7z6/catalogue/r2-travels-veerapandi-tirupur-taxi-services-0c6ak0mtl9.jpg?clr=';
      let imagePathLuxury = 'https://5.imimg.com/data5/SELLER/Default/2021/6/FH/OD/GU/9071665/swift-dzire-rs-1500-500x500.png';
      if (cab === 'Economy') {
        data = [
          {
            price: '600',
            img: imagePathEconomy,
            ETA: '10mins'
          },
          {
            price: '560',
            img: imagePathEconomy,
            ETA: '7mins'
          },
          {
            price: '700',
            img: imagePathEconomy,
            ETA: '15mins'
          },
          {
            price: '630',
            img: imagePathEconomy,
            ETA: '5mins'
          }
        ];
      } else if (cab === 'Premium') {
        data = [
          {
            price: '1600',
            img: imagePathPremium,
            ETA: '6mins'
          },
          {
            price: '1560',
            img: imagePathPremium,
            ETA: '8mins'
          },
          {
            price: '1700',
            img: imagePathPremium,
            ETA: '4mins'
          },
          {
            price: '1630',
            img: imagePathPremium,
            ETA: '15mins'
          }
        ];
      } else if (cab === 'Luxury') {
        data = [
          {
            price: '1600',
            img: imagePathLuxury,
            ETA: '6mins'
          },
          {
            price: '1560',
            img: imagePathLuxury,
            ETA: '8mins'
          },
          {
            price: '1700',
            img: imagePathLuxury,
            ETA: '4mins'
          },
          {
            price: '1630',
            img: imagePathLuxury,
            ETA: '15mins'
          }
        ];
      }
  
      setCarList(data);
    }, [cab]);


const handleBookNow = (id) =>{
  let obj = carList[id];
  setBooked(obj);
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
    {carList.map((data,Index) =>(
  <div class="card p-2 m-2 position-relative" style={{width: "18rem",zIndex:10}}>
  <img src={data.img} class="card-img-top" alt="car-image"/>
  <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-dark text-white">
    {data.ETA}
  </span>
  <div class="card-body">
  <h5 className="card-title">Class:{cab}</h5>
<p className='card-text'>Pickup Location:{pickup}</p>
<p className='card-text'>Drop Location:{drop}</p>  
<p className='card-text'>Type:{ride}</p>
<p className='card-text'>Price:&#8377;{data.price}</p>  </div>
<div className='d-flex align-items-center justify-content-center'>
  <button className='btn btn-dark text-white' onClick={() =>{handleBookNow(Index)}}>Book Now</button>
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
`
