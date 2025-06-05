import React,{useState} from "react";
import Purecompo from "./components/purecompo";

const app2 = () => {
  const[count , setCount] = useState(0)
  const [count2 , setCount2] = useState(10)

  return (
    <div>

        <nav className="flex bg-red-600 p-3.5 justify-between items-center ">

            <img src="" className="w-[40px] h-[40px] bg-amber-300 rounded-[50%] " alt="" />
             <ul className="flex gap-1.5">
             <li>Home</li>
             <li>about</li>
             <li>contactus</li>
             </ul>
        </nav>
      app2      <br/>
      <button onClick={()=>setCount(count + 1)}>count is {count}</button>
      <button onClick={()=>setCount2(count2 + 1)}> count2 is {count2}</button> 
      <Purecompo  valueofcount={count} />
    </div>
  );
};

export default app2;
