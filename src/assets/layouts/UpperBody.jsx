import { useState } from "react"
import CheckBox from "../components/CheckBox"
import Slider from "../components/Slider"

function UpperBody() {
   const [isDiscount, setIsDiscount] = useState(false)

   const getDiscount = (state) => {
      setIsDiscount(state)
   }

   return (
      <div className="container p-8 flex flex-col justify-between items-stretch">
         <div className="flex flex-col my-5">
            <Slider isDiscount={ isDiscount }/>
         </div>
         <div className="flex justify-center">
            <CheckBox getDiscount={ getDiscount }/>
         </div>
      </div>
   )
}
export default UpperBody