import React, { useState } from "react";
import "./style.css";

function App() {  
  const checkList = ["Shop All", "Bath"];
  const checkList2 = ["Cloths"];
  const checkList3 = ["Womens"];
  const [PrintData, setPrintData] = useState([""]);  
  console.log("CL",checkList3)
  const [show, setShow] = useState(false);  
  const [show2, setShow2] = useState(false);  
  const [show3, setShow3] = useState(false);  
  const [show4, setShow4] = useState(false);  
  const [ShowSub, setShowSub] = useState(false);    
  const [isChecked3, setIsChecked3] = useState(false);  
  const [isChecked4, setIsChecked4] = useState(false);  
  const [SubCategory,setSubCategory] = useState("");      
  const handleOnChange3 = () => {
    setIsChecked3(!isChecked3);
    if(!isChecked3){
      setShow3(true)
    }else{
      setShow3(false)
    }
    
  };  

  const handleOnChange4 = () => {
    setIsChecked4(!isChecked4);        
    if(!isChecked4){
      setShow4(true)
    }else{
      setShow4(false)
    }
  };  

  const CancelData=()=>{
    window.location.reload(false);
  }

  const UpdateData=async()=>{
    if(SubCategory === "" || SubCategory === undefined || SubCategory === null){
      alert("Please Enter Category")
    }else{
      checkList3.push(SubCategory);
      setPrintData(checkList3);
      alert("Category is Update Successfully..")
      await sleep(2000)        
    }    
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const handleCheckBox = (event, index) => {
      const checked = event.target.checked; 
      if(checked){
        setShow2(true)     
      }else{
        setShow2(false)     
      }      
      checkList(items => {
        return [

          ...items.slice(0, index),

          {...items[index], checked},

          ...items.slice(index + 1),
        ]
      })
  }

  return (
    <div className="app" style={{border: '1px solid red'}}>
      <div className="checkList" style={{border: '1px solid red'}}>
      <div style={{display: "flex", justifycontent: "space-between"}}>
        <p style={{backgroundcolor: "papayawhip"}}>Category</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p style={{backgroundcolor: "palegoldenrod",cursor:'pointer'}} onClick={()=>{setShow(true)}}>+&nbsp;Add Category</p>
      </div>        
        {show === "true" || show === true ?(
          <div className="list-container">            
          {checkList.map((item, index) => {
            return(
              <div key={index}>              
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value={item}                
                onChange={(e) => handleCheckBox(e, index)}
              />              
              <span >{item}</span>
              <br></br>
              {(item === "Shop All" && show2) ?(
              <>
              <div className="list-container">            
              {checkList2.map((item2, index2) => {
              return(
              <div key={index2}>              
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value={item2}
                checked={isChecked3}
                onChange={handleOnChange3}
              />              
              <span >{item2}</span>
              <br></br>
              {(item2 === "Cloths" && show3 ) ?(
              <>              
              <div style={{display: "flex", justifycontent: "space-between"}} >
              <div className="list-container">            
              {checkList3.map((item3, index3) => {
              return(
              <div key={index3}>              
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value={item3}
                checked={isChecked4}
                onChange={handleOnChange4}
              />              
              <span >{item3}</span>              
              {show4 &&      
              <p style={{backgroundcolor: "palegoldenrod",cursor:'pointer'}} onClick={()=>{setShowSub(true)}}>+&nbsp;Add Sub-Category</p>
              }                            
              <br></br>
              <br></br>        
              
        {(show4 && ShowSub) &&      
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
              )})}
              </div>
              </div>                
              </>
              ):(
                <></>                
              )}
              </div>
              )})}
              </div>                
              </>
              ):(
                <></>                
              )}              
            </div>
            )            
          })}
          </div>        
        ):(
          <></>
        )}      
      </div>
      <div>
        {PrintData === "" ?(
          <>          
          </>
        ):(
          <>
          Items checked are: &nbsp;&nbsp;&nbsp;
          {PrintData.map((ite,index)=>{
          return(
            <>
              {ite}
              &nbsp;,&nbsp;
            </>
          )
        })}
          </>
        )}
       
        
      </div>
    </div>    
  );
}
export default App;