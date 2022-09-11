
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import City from './components/cities/City'


function App() {
  return (
    <div className="App">
      <Header/>
      <City/>
      <Footer/>
    </div>
  );
}

export default App;
