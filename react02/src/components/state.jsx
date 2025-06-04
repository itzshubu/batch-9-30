import React, { useState } from "react";

let data2 = {
  name: "rahul",
  rollno: 90,
};

function Statecompo() {
    const [data, setData] = useState({ name: "shubham", rollno: 89 });
    
    //   console.log(useState({name : "shubham"}));
    
  console.log(data , data2 , "re-render");

  function clicktochange() {
    let value = prompt("enter the name")
    setData({...data , name : value})
  }

  function clicktochange2(){
    let value = prompt("enter the name")
    data2 = {...data2 , name : value}
    console.log(data2)
  }

  return (
    //    <React.Fragment>
    //      <div></div>
    //      <div></div>
    //    </React.Fragment>
    <>
      <div>name : {data.name}</div>
      <div onClick={clicktochange}> rollno : {data.rollno}</div>

      <h2> show using normal variable</h2>
      <div>name : {data2.name}</div>
      <div onClick={clicktochange2}> rollno : {data2.rollno}</div>
    </>
  );
}

export default Statecompo;
