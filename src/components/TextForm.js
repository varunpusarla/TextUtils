import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("Converting to uppercase")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick=()=>{
        // console.log("Converting to uppercase")
         let newText=text.toLowerCase()
         setText(newText)
         props.showAlert("Converted to lowercase","success")
     }

    const handleOnChange=(event)=>{
        //console.log("Onchange fired")
        setText(event.target.value)
    }

    const handleClear =()=>{
        setText(" ")
        
        props.showAlert("Cleared","danger")
    }
    const[text, setText]=useState("")
    return (
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}> style={{backgroundColor:props.mode==='light'?'black':'white '}}</textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{text.split(" ").length * 0.08} minutes read</p>
            </div>
        </div>
    )
}
