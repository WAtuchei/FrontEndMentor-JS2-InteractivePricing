import "../scss/mainBody.scss"
import Slider from "./components/Slider"

function MainBody() {
   return (
      <div className="container flex flex-1 justify-center">
         <section className="App-body text-center bg-white">
            <div className="p-8">
               <p className="uppercase">
                  100k pageviews
               </p>
               <Slider />
            </div>
            
            <section className="container mt-10">
               <ul className="flex flex-col justify-center items-center">
                  <li className="flex justify-center mt-2 gap-x-4 items-center text-center">
                     <img 
                        src="../../images/icon-check.svg" 
                        alt="check" 
                     />
                     <p>Unlimited websites</p>
                  </li>
                  <li className="flex justify-center mt-2 gap-x-4 items-center text-center">
                     <img 
                        src="../../images/icon-check.svg" 
                        alt="check" 
                     />
                     <p>100% data ownership</p>
                  </li>
                  <li className="flex justify-center mt-2 gap-x-4 items-center text-center">
                     <img 
                        src="../../images/icon-check.svg" 
                        alt="check" 
                     />
                     <p>Email reports</p>
                  </li>
               </ul>
               <button>Start my trial</button>
            </section>
         </section>     
      </div>
   )
}
export default MainBody