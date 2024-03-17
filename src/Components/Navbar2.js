import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from "react-icons/io5";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




import './Navbar2.css';
// const [isOpen, setOpen] = useState(false)
function Navbar2() {
  return (



    <Navbar collapseOnSelect expand="sm" className="mx-5">
      <Container className='fluid'>
        <Navbar.Brand href="#home">
         {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="All Category" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#men&women" style={{color:'black'}}>Men & Women</NavDropdown.Item>
              <NavDropdown.Item href="#men&women" style={{color:'black'}}>
                Elctronics
              </NavDropdown.Item>
              <NavDropdown.Item href="#men&women" style={{color:'black'}}>Jwelary</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4" style={{color:'black'}}>
                Other
              </NavDropdown.Item> */}
            </NavDropdown>
            <Form className="d-flex">
             <Form.Control 
              type="search"
              placeholder="Search"
              className="search"
              aria-label="Search"
            />
                 <Button variant="dark" className='searchbtn'><IoSearch style={{marginTop:'-40%'}}/></Button>
           </Form>
           <NavDropdown style={{color:'black'}} title="Engliesh" id="collapsible-nav-dropdown"  className='dropdown' >
              <NavDropdown.Item href="#action/3.1" style={{color:'black'}}>Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{color:'black'}}>
                Tamil
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3" style={{color:'black'}}>Jwelary</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{color:'black'}}>
                Other
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav className='log'>
          <Nav.Link href="./cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>  Cart</Nav.Link>
            <Nav.Link href="#pricing"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Login</Nav.Link>
            </Nav>
            
          </Nav>
          
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    // <Navbar expand="sm" className="mx-auto nav2">
    //   <Container className='fluid' >
    //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="#">
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Navbar2;