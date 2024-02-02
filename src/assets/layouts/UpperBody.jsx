import "../../scss/components/upperBody.scss"

function UpperBody() {
   return (
      <>
         <div id="paid-container">
            <input type="range" id="paid-range" />
            <p><span>$16.00</span> /month</p>
         </div>
         <div className="Billing-container flex">
            <p>Monthly Billing</p>
            <input type="checkbox" />
            <p>Yearly Billing</p>
         </div>
      </>
   )
}
export default UpperBody