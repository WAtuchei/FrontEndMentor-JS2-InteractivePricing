import "../../scss/components/slider.scss"

function Slider() {
   return (
      <>
         <div className="Paid-container">
            <input type="range" id="Paid" />
            <p><span>$16.00</span> /month</p>
         </div>
         <div className="Billing-container flex">
            <p>Monthli Billing</p>
            <input type="checkbox" />
            <p>Yearly Billing</p>
         </div>
      </>
   )
}
export default Slider