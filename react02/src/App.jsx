import { useState, useEffect } from "react";
import "./App.css";
import Mydata from "./components/showdata";
import { data } from "./components/showdata";
import Fetchandshow from "./components/fetchandshow";
import Statecompo from "./components/state";
import Showpropdata from "./components/showpropdata";
import Natureimg from "/data/nature1.jpg";

let name = "shubham";

function App() {
  let [name2, setName2] = useState(3);
  const [isShow, setisShow] = useState(false);

  console.log(Mydata, data);
  console.log("helo i am app");

  function changename() {
    name = "rahul";
    console.log(name);
  }

  let paths = [
    "/data/nature1.jpg",
    "/data/5thsection2img.png",
    "/data/straps2img.png",
  ];
  console.log(name);

  // function changename2() {
  //   setname2("rahul2");
  //   // console.log(name2);

  //   // name2 = "rahul2";
  //   // console.log(name2);
  // }

  useEffect(() => {
    console.log("useEffect in app");
  }, [name2]);

  useEffect(() => {
    console.log("run with all re-renders");
  });
  let studentdataaa = [
    { name: "shubham" },
    { name: "rahul" },
    { name: "sham" },
    { name: "ankit" },
  ];

  return (
    <>
      {/* hello {data[0]} rollno {data[1]} */}
      {/* <div className="divinapp">
      name : {name}
      name : {name2}
      <button onClick={changename}>change name</button>
      <button onClick={()=>setName2(name2+1)}>change name2</button>
      </div>

      <button onClick={()=>setisShow(!isShow)}> {isShow?"remove":"show"} </button>
      {/* {isShow && <Fetchandshow />} */}
      {/* {isShow ?<Fetchandshow />:""}
      <Statecompo />
      { !" " || "shubham"} */}
      {/* {Fetchandshow()} */}
      {/* <Showpropdata  studentdata={studentdataaa} teacherdata={[{} ,{},{}]}  /> */}
      hello
     
     
      {paths.map((value) => {
        return <img src={value} alt="" />;
      })}


      {/* <Showpropdata>
        <div>hsdfdk</div>
        <h2>kjldsfklj</h2>
      </ Showpropdata> */}
    </>
  );
}

export default App;
