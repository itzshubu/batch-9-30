import React,{useState , useCallback, useEffect , useRef} from "react";
import Purecompo from "./components/purecompo";

const app2 = () => {
  const[count , setCount] = useState(0)
  const [count2 , setCount2] = useState(10)

  const div1Ref = useRef(null);
  const div2ref = useRef()

  let alertfunction = useCallback(()=>{
    alert('hello i am alertfunction')
  },[])

  useEffect(()=>{
         
  },[])

  function changecolor(){
    console.log("change color" , div1Ref)
    div1Ref.current.style.backgroundColor = "red"
  }

  return (
    <div>

        {/* <nav className="flex bg-red-600 p-3.5 justify-between items-center max-sm:flex-col ">

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
      <Purecompo  valueofcount={count} passfunction={alertfunction} /> */}
      {/* <div  className="bg-red-500 sm:bg-green-500 h-[300px] lg:bg-yellow-200"> */}

      {/* </div> */}
      <div ref={div1Ref} className="h-[200px]">

      </div>

      <div ref={div2ref} >

      </div>

      <button onClick={changecolor}>change color</button>
    </div>
  );
};

export default app2;
