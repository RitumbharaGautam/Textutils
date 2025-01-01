import React, {useState} from "react";

function Main(props) {
const[upper, setUpper] = useState("");
let words =  upper.trim().split(" ").filter((element) => {return element.length!==0}).length;
let characters = upper.length;


function handleChange(event){
    setUpper(event.target.value);
}

function handleClickUp(event){
    let UppercaseText = upper.toUpperCase();
    setUpper(UppercaseText);
}

function handleClickLo(event){
    let LowercaseText = upper.toLowerCase();
    setUpper(LowercaseText);
}

function handleClickCl(event){
    setUpper("");
    props.showAlert("Text cleared!", "success");
}

function handleClickSp(event){
   let newUpper =  upper.replace(/\s+/g,'');
   setUpper(newUpper);
}

    return (
      <>
<div className="container my-3 ">
    <h2 style={{color: (props.textDisplay === 'light') ? "black" : "white"}}>Enter your text to Analyse!</h2>
  <textarea className="form-control" placeholder="Enter your text here." id="floatingTextarea" rows="5" onChange={handleChange} value={upper}>{upper}</textarea>
  <button type="button" className="btn  m-2" disabled={upper.length===0} onClick={handleClickUp} style={props.value}>Uppercase</button>
  <button type="button" className="btn  m-2" disabled={upper.length===0} onClick={handleClickLo}  style={props.value}>Lowercase</button>
  <button type="button" className="btn  m-2" disabled={upper.length===0} onClick={handleClickSp}  style={props.value}>Remove Extra Spaces</button>
  <button type="button" className="btn  m-2" disabled={upper.length===0} onClick={handleClickCl}  style={props.value}>Clear All</button>
  <div className="my-3"  style={{color: (props.textDisplay === 'light') ? "black" : "white"}}>
  <h4><i>Your text Summary.</i></h4>
  <p>{words} word and { characters } characters.</p>
  <h5>Text Preview</h5>
  <p>{upper.length>0 ? upper : "Nothing to preview."}</p>
  </div>
</div>
      </>
    );
  }
  export default Main;