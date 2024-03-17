import Carousel from 'react-bootstrap/Carousel';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import './Carousal.css';
import { addToCart } from './Actions';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const Home = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate()

  let storeObj = useSelector((store)=>{
      return  store;
     });


  let [product,setProduct] = useState([])
  let [cart,setCart] = useState([]);


  let getProducts = async ()=>{

let JOSNData = await fetch('https://fakestoreapi.com/products');
let JOSData = await JOSNData.json();
setProduct(JOSData);
console.log(JOSData);

  }


useEffect(()=>{

  getProducts();

})


function addToCart (Home){
  setCart([...cart,{...Home}])
}

return (
    <div> 
   
    <Carousel className='carousel'>
    
      <Carousel.Item className='item1' >
      <h3 className='hero'>Eflyer</h3>
      <Carousel.Caption >
          <h2 style={{color:"#fff",fontWeight:"bolder" }}>GET START </h2>
          <h2 style={{color:"#fff",fontWeight:"bolder" }}>YOUR FAVRIOT SHOPING</h2>
        {/* <ExampleCarouselImage text="First slide" /> */}
          <Button className="buynowbut" style={{height:"50px", width:"150px", backgroundColor:"#000",margin:"10px"}} >Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='item2'>
      <h3 className='hero'>Eflyer</h3>
        <Carousel.Caption>
        <h2 style={{color:"#fff",fontWeight:"bolder" }}>GET START </h2>
          <h2 style={{color:"#fff",fontWeight:"bolder" }}>YOUR FAVRIOT SHOPING</h2>
          <Button className="buynowbut" style={{height:"50px", width:"150px", backgroundColor:"#000",margin:"10px"}}   >Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='item3'>
      <h3 className='hero'>Eflyer</h3>
        <Carousel.Caption>
        <h2 style={{color:"#fff",fontWeight:"bolder" }}>GET START </h2>
          <h2 style={{color:"#fff",fontWeight:"bolder" }}>YOUR FAVRIOT SHOPING</h2>
          <Button className="buynowbut" style={{height:"50px", width:"150px", backgroundColor:"#000",margin:"10px"}} >Buy Now</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <div className='com'>
        <Navbar1/>
        <h3 className='head'>Eflyer</h3>
        <Navbar2/>
      </div>
    </Carousel>

      <div>
        <h3 className='heading'  id='men&women'>Men & Women Fashion, Jwelary</h3>
        </div>
        <div className='fashion'>

<div className='box'>
{product.map((p)=>{


return (

 <div className='items'>
     <Card style={{ width: '18rem', textAlign:'center'}}>
    
    <Card.Body>
      <Card.Title>{p.title}</Card.Title>
      <Card.Text><b>price </b> $ {p.price}</Card.Text>
      <Card.Img variant="top" src= {p.image}/>
    <br></br>
    <br></br>
  
      <Button variant="dark" onClick={()=>{
        dispatch({type:'addIteam', payload:{
          title:p.title,
          image:p.image,
          price:p.price 
        }}); 
        navigate('/cart')
      }}>Buy Now</Button>
    </Card.Body>
  </Card>

  
     </div>
 

)


})}

</div>     

</div>

   


    </div>
    
    
);
}


export default Home;



