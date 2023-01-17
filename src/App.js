import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
//import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Join from './components/Join';



function App() {
  // let darkBtnStyle={
  //   // backgroundColor:'gray',
  //   // color:'white'

  // }
  // const enableDarkTheme=()=>{
  //   document.getElementById('Body').style.backgroundColor='#1c1c1c';
  //   document.getElementById('Heading').style.color='white';
  //   document.getElementById('darkModebtn').innerHTML='Disable Dark';
  //   document.getElementById('darkModebtn').style.color='white';
  //   document.getElementById('darkModebtn').style.backgroundColor='#5c5b5b';
  //   document.getElementById('myBox').style.backgroundColor='#1c1c1c';
  //   document.getElementById('myBox').style.border='1px solid #e0dede';
  //   document.getElementById('resetBtn').style.color='white';
   
  //   var example_name = document.getElementById("resetBtn");
  //   example_name.addEventListener('mouseover',function(){
  //     example_name.style.color='black';
  //   })
  //   example_name.addEventListener('mouseout',function(){
  //     example_name.style.color='white';
  //   })

  // }

  
  const [mode,setMode] = useState('light');
  const changeModefun=()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#1c1c1c';
        document.getElementById('Heading').style.color='white';
        document.getElementById('myBox').style.backgroundColor='#1c1c1c';
        document.getElementById('myBox').style.border='1px solid #e0dede';
        document.getElementById('myBox').style.color='White';

        document.getElementById('resetBtn').style.color='white';  
      
        var example_name = document.getElementById("resetBtn");
        example_name.addEventListener('mouseover',function(){
          example_name.style.color='black';
        })
        example_name.addEventListener('mouseout',function(){
          example_name.style.color='white';
        })
        document.getElementById('textSummery').style.color='white';
        document.getElementById('textPreviewHeading').style.color='white';
        document.getElementById('preiewTextArea').style.color='white';
        document.title="Textify/Darkmode";

        //join component styles
        //document.getElementsByClassName('form-label').style.color='white';
       // document.getElementById('emailId').style.color='white'

      }
      else 
      {
        setMode('light');  
        document.body.style.backgroundColor='white';
        document.getElementById('Heading').style.color='black';
        document.getElementById('myBox').style.backgroundColor='white';
        document.getElementById('myBox').style.border='1px solid #e0dede';
        document.getElementById('myBox').style.color='black';
        document.getElementById('resetBtn').style.color='black';
        document.getElementById('textSummery').style.color='black';
        document.getElementById('textPreviewHeading').style.color='black';
        document.getElementById('preiewTextArea').style.color='black';
        
        //document.getElementById('flexSwitchCheckDefault').style.backgroundColor='gray';
        document.title="Textify/Lightmode";

        //join component styles
        // document.getElementsByClassName('form-label').style.color='black';
        //document.getElementById('emailId').style.color='black'
      }
  }


  // const [alert,setAlert]=useState(null);

  // const showAlert=()=>{
  //     setAlert('Please Enter something');
  // }
  

        
  return (
   <>
  
    <Router>
    <Navbar title="TextiFy"  home="Home" aboutUs="About Us" followUs="Follow US" Mode={mode} changeMode={changeModefun}  joinButton="Join"/>
      {/* <Alert alert={alert} /> */}
      
      <div className='container'>
      
        <Switch>
          <Route exact path="/home">
              <TextForm heading="Convert your text" className="mb-3"  />    
          </Route>  
          <Route exact path="/about">
              <About/>
          </Route>
           <Route exact path="/join">
              <Join email="Email Address"  name="Full Name" phone="Contact No" submit="Submit"  />
          </Route>
        </Switch>
           
            
        </div>
        
      </Router>
   </>
  );
}

export default App;
