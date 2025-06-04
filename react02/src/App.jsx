import { useState , useEffect } from "react";
import "./App.css";
import Mydata from "./components/showdata";
import { data } from "./components/showdata";
import Fetchandshow from "./components/fetchandshow";
import Statecompo from "./components/state"

let name = "shubham";

function App() {
  let [name2, setName2] = useState(3);

  console.log(Mydata, data);
  console.log("helo i am app");

  function changename() {
    name = "rahul";
    console.log(name);
  }
  console.log(name);

  // function changename2() {
  //   setname2("rahul2");
  //   // console.log(name2);

  //   // name2 = "rahul2";
  //   // console.log(name2);
  // }

  useEffect(()=>{
     console.log("useEffect in app")
  },[name2])

  useEffect(()=>{
    console.log('run with all re-renders')
  })

  return (
    <>
      {/* hello {data[0]} rollno {data[1]} */}
      <div className="divinapp">
      name : {name}
      name : {name2}
      <button onClick={changename}>change name</button>
      <button onClick={()=>setName2(name2+1)}>change name2</button>
      </div>
      {/* <Fetchandshow />s */}
      <Statecompo />
      {/* {Fetchandshow()} */}
    </>
  );
}

export default App;
