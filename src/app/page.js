 "use client";

import { useState } from "react";
import { Modal } from "@/components/ui";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [step, setStep] = useState(0); 
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");


  const handleNext = () => setStep(step + 1);
  const handleClose = () => {
    setStep(0);
    setInput("");
    setCode("");
  };

  const handleYes = () => {
    // generate random 4-digit code between 1000-9999
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCode(randomCode);
    handleNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
 <Button onClick={()=> setStep(1)}>Buy</Button>
  <Modal open={step===1} onClose={handleClose} title="Confirm Purchase">
    <p className=" text-black text-center">Do you want to buy this item?</p>
    <div className="pt-7 justify-between flex items-end">
    <Button onClick={handleYes} >Yes</Button>
    <Button onClick={handleClose}>Cancel</Button>
  </div>
  </Modal>
  <Modal open={step===2} onClose={handleClose} title="Enter 4-Digit Code" >
  <p className="text-center mb-3"><b>{code}</b></p>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value.slice(0, 4))}
placeholder="0000"
className="text-black block mx-auto border-1 my-0 border-black"
 /><Button className={`block mx-auto my-7 ${input===code? "":"bg-gray-600 hover:bg-gray-600"}` }
onClick={()=>{
  if(input===code) handleNext();
} 
}>Buy</Button>
    
  </Modal>  
   <Modal open={step===3} onClose={handleClose} title="Purchase Successful">
    <Button onClick={handleClose} className="mx-auto block mb-5">OK</Button>
   </Modal>
  </div>
  );
}