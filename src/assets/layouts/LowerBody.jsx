function LowerBody() {
  return (
      <div
         id="lower-app-body"
         className="container my-2 pt-4 px-5 md:px-8 flex flex-col md:flex-row justify-between items-center">
         <ul className="flex flex-col justify-center items-center lg:items-start">
            <li className="flex justify-center mt-2 gap-x-3 lg:gap-x-1 items-center text-center">
               <img 
                  src="../../images/icon-check.svg" 
                  alt="check" 
               />
               <p>Unlimited websites</p>
            </li>
            <li className="flex justify-center mt-2 gap-x-3 lg:gap-x-1 items-center text-center">
               <img 
                  src="../../images/icon-check.svg" 
                  alt="check" 
               />
               <p>100% data ownership</p>
            </li>
            <li className="flex justify-center mt-2 gap-x-3 lg:gap-x-1 items-center text-center">
               <img 
                  src="../../images/icon-check.svg" 
                  alt="check" 
               />
               <p>Email reports</p>
            </li>
         </ul>    
         <button>Start my trial</button>     
      </div>
  )
}
export default LowerBody