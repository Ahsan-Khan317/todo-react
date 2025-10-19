import { useEffect, useRef, useState } from "react";

function Addition(){

const [value,setvalue]=useState([]);
const inputref = useRef();

const handle =()=>{
const ko = inputref.current.value;

(ko !== "")?setvalue([...value,ko]):setvalue([...value]);






inputref.current.value=""
}


useEffect(()=>{
localStorage.setItem("key",JSON.stringify(value))

},[value]);

useEffect(()=>{
 const kl = JSON.parse(localStorage.getItem("key") || "[]");
    setvalue(kl);

},[])
console.log({value})
return(
    

<div className="w-[80vw]  border-2 border-blue-500 bg-[#B0CE88] rounded-2xl m-auto not-sm:w-[92vw] p-3">



<div className="w-full flex justify-center items-center gap-2">
    <input type="text" placeholder="Add your work........" ref={inputref} className="w-[80%] h-[40px] text-2xl outline-none " />
    <div className="cursor-pointer border-2 border-grey rounded-[20px] px-4 py-2 active:scale-[0.8]"> 
        
           <button className="cursor-pointer font-bold text-2xl  " onClick={handle}>ADD</button>
</div>
</div>

</div>



)

}

export  default Addition ;