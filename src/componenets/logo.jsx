import React from 'react'
import logoimage from '/logo.png'

const Logo = () => {
  return (
    <div className="[container-type:inline-size]  w-[30cqw] flex items-center justify-start " >
      <img className="w-[30cqw] invert-100  " src={logoimage}/>
      <h1 className="capitalize text-[8cqw] font-black">mr. student</h1>
    </div>
  )
}

export default Logo
