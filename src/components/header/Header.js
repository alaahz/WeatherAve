import React from 'react';
import {Nav,Navbar,Figure} from 'react-bootstrap';





function Header() {
    return ( 
        <Nav className="justify-content-center" >
   <Navbar.Brand href="#">
                    <Figure>
                        <Figure.Image
                            width={250}
                            height={250}
                            alt="weatherave"
                            src="https://i.ibb.co/3BGZFrs/Picture1.png"
                        />   
                    </Figure>
                    </Navbar.Brand>
  </Nav> 
       
    );
}

export default Header;
