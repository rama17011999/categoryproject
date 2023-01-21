import React, { useState } from "react";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);  
  const [show2, setShow2] = useState(false);  
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);  
  const [SubCategory,setSubCategory] = useState("");    
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    setShow2(false)
  };
  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
    setShow2(false)
  };  

  const CancelData=()=>{
    window.location.reload(false);
  }

  const UpdateData=async()=>{
    if(SubCategory === "" || SubCategory === undefined || SubCategory === null){
      alert("Please Enter Category")
    }else{
      alert("Category is Update Successfully..")
      await sleep(2000)  
      window.location.reload(false);
    }    
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  return (
    <div className="app">
      <div className="checkList">        
        <div style={{display: "flex", justifycontent: "space-between"}}>
        <p style={{backgroundcolor: "papayawhip"}}>Category</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p style={{backgroundcolor: "palegoldenrod",cursor:'pointer'}} onClick={()=>{setShow(true)}}>+&nbsp;Add Category</p>
        </div>        
        {show && 
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="ShopAll"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Shop All
        </div>        
        }
        <br></br>
        <br></br>
        {isChecked && 
          <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Cloths"
            checked={isChecked2}
            onChange={handleOnChange2}
          />
          Cloths
          </div>        
        }
        <br></br>
        <br></br>
        {isChecked2 && 
        <div style={{display: "flex", justifycontent: "space-between"}} >
          <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Womens"
            // checked={isChecked3}
            // onChange={handleOnChange3}
          />
          Womens
          </div>        
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p style={{backgroundcolor: "palegoldenrod",cursor:'pointer'}} onClick={()=>{setShow2(true)}}>+&nbsp;Add Sub-Category</p>
          </div>
        }
        <br></br>
        <br></br>
        {show2 &&      
          <div style={{display: "flex", justifycontent: "space-between"}}>
          <input type="text" id="inputID" className="form-control form-control-field border-0" onChange={event => setSubCategory( event.target.value)}/>   
          &nbsp;
          <button type="button" onClick={()=>CancelData()}>
            Cancel
          </button>
          &nbsp;
          <button type="button" onClick={()=>UpdateData()}>
            Done
          </button>
          </div>        
        }        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {show && 
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Both"                        
          />
          Bath
        </div>        
        }       
    </div>
  );
}
export default App;