import React,{memo} from 'react'

const purecompo = ({valueofcount  ,passfunction}) => {

console.log( "i am child compo")

  return (
    <div>purecompo {valueofcount}
     <button onClick={()=>passfunction()}>show alert</button>
    </div>
  )
}

export default memo(purecompo)