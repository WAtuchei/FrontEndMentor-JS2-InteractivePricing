import { useState } from "react"
import PropTypes from 'prop-types'
import "../../scss/components/slider.scss"

function Slider({ isDiscount }) {
   const [pageviews, setPageViews] = useState('100k')
   const [amount, setAMount] = useState(16)
   const [rangeWidth, setRangeWidth] = useState(50)
   const pageView = [
      '10k',
      '50k',
      '100k',
      '500k',
      '1M'
   ]

   const amountHandler = ( e ) => {
      setRangeWidth( 25 * e )
      setAMount( 8 + (e * 4) )
      setPageViews( pageView[e] )
   }

   Slider.propTypes = {
      isDiscount: PropTypes.bool
   }
   return (
      <>
         <div className="grid-container container">
            <p className="uppercase self-center">
               {`${pageviews} pageviews`}
            </p>
            <div className="slider-con">
               <input
                  min={0}
                  max={4}
                  step={1}
                  type="range" 
                  id="paid-range"
                  className="mt-10 w-full"
                  onChange={(e) => amountHandler(e.target.value)}
               />
               <div className="progess-bar-container">
                  <div className="progess-bar"></div>
                  <div 
                     className="progess-bar-active"
                     style={{width:`${rangeWidth}%`}}
                  >               
                  </div>
               </div>
            </div>
            <div className="amount-con flex mt-5 gap-x-2 justify-center items-center">
               <p 
                  id="amount"
               >
                { isDiscount ? 
                  `$${amount - (amount * 0.25)}.00` : 
                  `$${amount}.00`
                  }  
               </p>
               <p>/ month</p>
            </div>
         </div>         
      </>
   )
}
export default Slider