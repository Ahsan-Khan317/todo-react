import { useEffect, useRef, useState } from "react";

function Addition(){

const [value, setvalue] = useState(() => {
  const stored = localStorage.getItem("key");
  return stored ? JSON.parse(stored) : [];
});

const inputref = useRef();

const handle =()=>{
const ko = inputref.current.value;

(ko !== "")?setvalue([...value,ko]):setvalue([...value]);






inputref.current.value=""
}


useEffect(()=>{
localStorage.setItem("key",JSON.stringify([...value]))

},[value]);

const del = (index)=>(
    setvalue(value.filter((_,p)=> index != p))
)

const lnt = (index)=>{
const klp = prompt("edit there.....");
if (klp !== null && klp.trim() !== ""){
const newval = [...value];
newval[index] = klp;
setvalue(newval);

}
}


const toggleDone = (index) => {
    const updated = [...value];
    updated[index].done = !updated[index].done;
    setvalue(updated);
  };



return(
    

<div className="w-[80vw]  border-2 border-blue-500 bg-[#B0CE88] rounded-2xl m-auto not-sm:w-[92vw] p-3">



<div className="w-full flex justify-center items-center gap-2">
    <input type="text" placeholder="Add your work........" ref={inputref} className="w-[80%] h-[40px] text-2xl outline-none " />
    <div className="cursor-pointer border-2 border-grey rounded-[20px] px-4 py-2 active:scale-[0.8]"> 
        
           <button className="cursor-pointer font-bold text-2xl  " onClick={handle}>ADD</button>
</div>
</div>





{

 









[...value].map((e,index) =>(
<div key={index} className="w-[98%]  border-2 border-blue-500 flex flex-col gap-1 justify-around items-center bg-[#B0CE88] rounded-2xl my-1.5 not-sm:w-full p-3">
    <div><h1 className="text-3xl text-red-700 font-bold">{e}</h1></div> 
    <div className="flex  items-center justify-around w-full">
    <button className="cursor-pointer font-bold text-2xl not-sm:text-[18px] active:scale-[0.8]  " onClick={()=>del(index)}>Delete</button>
    <button className="cursor-pointer font-bold text-2xl not-sm:text-[18px] active:scale-[0.8] " 
     onClick={()=>{lnt(index)}}> Edit</button>
    <button className="cursor-pointer font-bold text-2xl active:scale-[0.8] not-sm:text-[18px] " onClick={()=>{toggleDone(index)}}>Line-through</button></div>
</div>

)
)

}








</div>




)

}

export  default Addition ;