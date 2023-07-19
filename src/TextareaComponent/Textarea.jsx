import React from "react";

 const Textarea=(props)=>{
    return(
        <>
        
        <div  className="flex justify-center item-center mt-[20px]">
             <textarea id="data" name="textareadata" rows="8" cols="63" className="rounded pl-3" value={props.textdata}>
            </textarea> 
            </div>
        
        </>
    )

 }
 export default Textarea;