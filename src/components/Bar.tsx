import { useState } from "react"

 type BarProps = {
    amount : number,
    day : string
 } 


function Bar({amount, day} : BarProps) {
    const [visible, setVisible] = useState(false)

    function isVisible(){
        setVisible(true)
    }

    function isNotVisible(){
        setVisible(false)
    }
  return (
    <div className=" self-end justify-self-center  relative">
        {visible && <div className="text-cream bg-darkBrown rounded p-1 text-center font-medium  absolute -top-10 -left-2">${amount}</div>}
        <div onMouseEnter={isVisible} onMouseLeave={isNotVisible} className={`bg-softRed   rounded w-10 it hover:bg-opacity-60  ${
         day === 'mon' ? 'h-8' :
         day === 'tue' ? 'h-24' :
         day === 'wed' ? 'h-32 bg-cyan' :
         day === 'thu' ? 'h-20' : 
         day === 'fri' ? 'h-12' :
         day === 'sat' ? 'h-28' :
         day === 'sun' ? 'h-16' :
         ''
        } `}></div>
    </div>
  )
}

export default Bar