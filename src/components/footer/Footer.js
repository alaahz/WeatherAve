import React from 'react';
import { Container,Figure} from 'react-bootstrap';





function Footer() {

    return (  
    <Container style={{textAlign:"center",marginTop:'16%'}}>         
                 <Figure>
                    <Figure.Image
                            width={250}
                            height={250}
                            alt="weatherave"
                            src="https://i.ibb.co/3BGZFrs/Picture1.png"/>   
                    </Figure>
           
             <h4 style={{   fontFamily: 'Tajawal, sans-serif', color: "white"}}>Developed By Alaa Alhazmi</h4>
     
       </Container>
    );
}

export default Footer;
