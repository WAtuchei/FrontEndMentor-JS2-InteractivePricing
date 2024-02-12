import CheckBox from "../components/CheckBox"
import Slider from "../components/Slider"

function UpperBody() {
   return (
      <div className="container p-8 flex flex-col justify-between items-stretch">
         <div className="flex flex-col my-5">
            <Slider />
         </div>
         <div className="flex justify-center">
            <CheckBox />
         </div>
      </div>
   )
}
export default UpperBody