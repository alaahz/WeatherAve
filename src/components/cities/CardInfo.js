import React from 'react';
import {Card,Figure,Container,Row,Col,Stack} from 'react-bootstrap';
import './cardinfo.css'


function CardInfor (props){
    

   console.log(props.list)
    return (
            <Container style={{paddingTop: '3%' , paddingBottom: '3%'}}>
                
                        <Row >
                        {props.list.map((day)=>{
                    return (  
                            <Col className="CardGlassEffect" style={{  textAlign: 'center', marginRight: '1%'}}>
                                <Figure>
                                    <img
                                        width={100}
                                        height={100}
                                        alt="171x180"
                                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}/>
                                </Figure>
                                <Card.Title className="Text1">{day.weather[0].description.charAt(0).toUpperCase()+ day.weather[0].description.slice(1) }</Card.Title> 
                                <Stack className="Text">
                                {/* <h4 >Time: {day.dt_txt.slice(11)}</h4>      */}
                                <h4 >Humidity: {day.main.humidity}</h4>     
                                <h4 >Temperature: {day.main.temp}</h4> 
                                <h4 >Wind Speed: {day.wind.speed}</h4>
                                </Stack>
                            </Col>
                              )
                            })}
                        </Row>

                  
              
        </Container>  
     
    

    )
    

}

export default CardInfor;