import React from 'react';
import { Figure, Stack} from 'react-bootstrap';
import './footer.css'




function Footer() {

    return (  
    <Stack className='footerContainer'>         
                 <Figure>
                    <Figure.Image
                            width={250}
                            height={250}
                            alt="weatherave"
                            src="https://i.ibb.co/3BGZFrs/Picture1.png"/>   
                    </Figure>
           
                    <h4 className='footerLink'>Developed By   
                        <a href="https://alaaalhazmi.netlify.app/"> Alaa Alhazmi</a>
                    </h4>
       </Stack>
    );
}

export default Footer;
