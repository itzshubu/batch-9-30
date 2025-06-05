import React,{memo} from 'react'

const purecompo = ({valueofcount}) => {

console.log( "i am child compo")

  return (
    <div>purecompo {valueofcount}</div>
  )
}

export default memo(purecompo)