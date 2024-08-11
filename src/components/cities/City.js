import React ,{useState} from 'react';
import {Stack, Container,Form,FormControl,Button, Row} from 'react-bootstrap';
import CardInfor from './CardInfo.js';
import axios from 'axios';
import './city.css';


function City (){
  
    const [ weather, setWeather] = useState(null)
    const [ userInput, setUserInput] = useState("")
    const [message, setMessage] = useState("Please Enter Correct City Name.")
    const [getdata, setGetDate] = useState(false)

    const handleSubmit =  (e) => {
      e.preventDefault()

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&cnt=4&appid=${process.env.REACT_APP_KEY_API}`)
      .then(function (response) {
        setGetDate(false)
        setWeather(response.data);
      })
      .catch(function (error) {
        setGetDate(true)
        setMessage('Please enter a city name.')
      })
      .then(function () {
      });

  }
    return (
    <Stack style={{marginTop:"5%"}}>
        <Container style={{width:"45%"}}>
        <Row>
        <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={userInput}
          name ="cityName"
          onChange={(e) => {setUserInput(e.target.value)}}
          style={{borderRadius: "25px", }}
        />
        <Button type="submit" value="Submit"  style={{borderRadius: "25px" , backgroundColor:"#6a85b6"}} >Search</Button>
      </Form>
     { getdata && <Container><h3 className="TextError">{message}</h3></Container>}
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      
        </Container>
        <Stack>
          <Row style={{textAlign:"center"}}>
              {weather? ( 
              <Container className="Text">
                <h3>{weather.city.name}, {weather.city.country}</h3>
                <h4>{weather.list[0].dt_txt.slice(0,10)}</h4>
              </Container>
              ):(
              '')
              }
           </Row>
         <Container className="glassEffect" > 
         {weather? 
         <Container>
          <CardInfor list={weather.list}  /></Container> :
          ''}
      </Container>
      </Stack>
    </Stack>
    )
    

}


export default City;