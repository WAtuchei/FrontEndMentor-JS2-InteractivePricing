import "../../scss/components/checkBox.scss"

function CheckBox() {
   return (
      <div className="checkbox-container flex mt-3 gap-x-2 text-center">
         <p className="flex justify-center items-center">Monthly Billing</p>
         <label 
            htmlFor="checkSwitch"
            className="flex justify-center items-center"
         >
            <input 
               type="checkbox"
               id="checkSwitch"
            />
         </label>
         <div className="discount-container flex flex-row gap-x-1 justify-center items-center">
            <p>Yearly Billing</p>
            <p className="discount px-2 py-1"><span>-25%</span></p>
         </div>
      </div>
   )
}
export default CheckBox