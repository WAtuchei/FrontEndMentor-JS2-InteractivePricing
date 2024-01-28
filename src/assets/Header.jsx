import "../scss/header.scss"

function Header() {
   return (
      <header className="w-full flex flex-1 items-center">
         <div className="header-BG w-full h-full"></div>
            <div className="w-full text-center">
               <h1>
                  Simple, traffic-based pricing
               </h1>
               <p>
                  Sign-up for our 30-day trial. No credit card required.
               </p>
            </div>
      </header>
   )
}
export default Header