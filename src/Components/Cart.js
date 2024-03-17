import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Navbar1 from './Navbar1';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdLibraryAdd } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


function Cart() {


  const [score, setScore] = useState(1);
  const increaseScore = () => {
    setScore(prevScore => prevScore + 1); 
  };

  
  const decreaseScore = () => {
    setScore(prevScore => prevScore - 1); 
  };

  let storeObj = useSelector((store)=>{
      return  store;
     });

    console.log(storeObj.iteam[0].image);

   

  return (
    <div>
<Navbar1/>
<br></br>
<Navbar expand="lg"  className="bg-body-tertiary" >
      <Container style={{backgroundColor:'black',width:'100%'}}>
        <Navbar.Brand style={{backgroundColor:'black',color:'red',}} href="#home">Eflyer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  style={{textAlign:'center'}} className="me-auto">
            <Nav.Link style={{color:'white'}} href="./">Home</Nav.Link>
            <Nav.Link style={{color:'white'}}  >Cart</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<br></br>
<br></br>
<h1>Cart</h1>

{/* <img style={{width:'30%'}} src={storeObj.iteam[0].image}></img> */}
<img style={{width:'30%'}} src={storeObj && storeObj.iteam[0] &&storeObj.iteam[0].image ? storeObj.iteam[0].image:"" }></img>


<h1>{storeObj.iteam[0].title}</h1>
<h1><b>$</b>:{storeObj.iteam[0].price}</h1>
<button style={{backgroundColor:'black',color:'white'}} type='reset'><MdDelete /></button>

<br></br>
   <div className='add'>
   <button style={{backgroundColor:'black',color:'white'}} onClick={increaseScore}>  <MdLibraryAdd /></button>
    <h2> {score}</h2>
      <button  style={{backgroundColor:'black',color:'white'}} onClick={decreaseScore}><IoBagRemove /></button>
   </div>



    </div>
  )
}

export default Cart
