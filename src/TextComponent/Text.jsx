import React, { useState } from 'react';
import Textarea from '../TextareaComponent/Textarea';
import "./Text.css";

const Text=()=>{
    const[data,setData]=useState();
    let text="";
    

    const getData=(e)=>{
        setData(text);
        
       // const data2= document.getElementById("inputdata"); //  way of using get element of id.
        // const  inputvalue =data2.value;
        // setData(inputvalue); 

    }
    const handleOnSubmit=(e)=>{
        
        text= e.target.value;
    }

    return(
        <>
        <div className=" flex justify-center items-center bg-slate-200 h-screen w-full">
        <div className="bg-indigo-400 h-96 w-3/5 flex justify-center items-center flex-col">

            <div className=" flex justify-center items-center h-16 w-3/5">
            <input onChange={handleOnSubmit} id ="inputdata" type="text" placeholder=' Enter your text here..' className=" pl-3 h-[35px] w-96 rounded "></input>

                <button onClick={getData} className=" bg-green-800 rounded-md text-white w-24 h-[35px] ml-[10px] hover:bg-green-400 hover:border-2 border-green-800">Show Me</button>
            </div>
        
    <Textarea textdata={data}/>
        </div>
        </div>
        </>
    )
}
export default Text;
