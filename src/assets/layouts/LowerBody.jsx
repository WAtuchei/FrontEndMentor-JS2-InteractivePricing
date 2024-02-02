function LowerBody() {
  return (
      <div
         id="lower-app-body"
         className="container pt-4">
         <ul className="flex flex-col justify-center items-center">
            <li className="flex justify-center mt-2 gap-x-3 items-center text-center">
               <img 
                  src="../../images/icon-check.svg" 
                  alt="check" 
               />
               <p>Unlimited websites</p>
            </li>
            <li className="flex justify-center mt-2 gap-x-3 items-center text-center">
               <img 
                  src="../../images/icon-check.svg" 
                  alt="check" 
               />
               <p>100% data ownership</p>
            </li>
            <li className="flex justify-center mt-2 gap-x-3 items-center text-center">
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