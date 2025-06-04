import { useState } from "react";

function showpropdata(a){

    console.log(a)

    const {studentdata , teacherdata} = a
    return (
        <div>
        {/* {a.studentdata.map((value)=>{
            return <p>{value.name}</p>
        })}       */}
     
     {
        studentdata.map((obj)=>{
            return <p>{obj.name}</p>
        })
     }




        </div>
    )
}

export default showpropdata
