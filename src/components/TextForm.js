import React,{useState} from 'react'
//import Alert from './Alert';

export default function TextForm(props) 
{
    const [text, setText] = useState('');

    
    function handleUpperCaseclick() {
        if(text === '')
        {
           
        }
        else {
            let newText=text.toUpperCase();
            setText(newText);
        }
        
        
    }
    function handleLowerCaseclick(params) {
        let newText=text.toLowerCase();
        setText(newText);
    }
    function onChangeHandler(event) {
        setText(event.target.value);
    }
    function handleResetclick() {
        setText("");
    }
    const copyText=()=>{
        console.log("Copied");
        var text=document.getElementById("myBox");
        text.select();
        //text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        document.getElementById('copyBtn').innerHTML='Copied';
        document.getElementById('copyBtn').style.color='green';
    
      }
  return (
    <div>
        {/* <h1 id="Heading">{props.heading}</h1> */}
        <button id="copyBtn"  onClick={copyText} >Copy</button> 
        {/*  */}
        {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label" id="Heading"><b>{props.heading}</b></label>
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <div className='buttons'>
            <button disabled={text.length === 0}className="upperCaseBtn mx-4 my-1" onClick={handleUpperCaseclick} id="upperBtn">Convert to Uppercase</button>
            <button className="lowerCaseBtn mx-4 my-1" onClick={handleLowerCaseclick} id="lowerBtn">Convert to Lowercase</button>
            <p id="textSummery">{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} word(s) and {text.length} character(s) </p>
            <button className="resetBtn mx-4 my-1" onClick={handleResetclick} id="resetBtn">Reset</button>    
        </div>
        <h3 className="textPreview my-3" id='textPreviewHeading'>Text Preview</h3>
        <p id='preiewTextArea' >{text.length>0? text:"Nothing to preview" }</p>
    </div>
    
  )
}
