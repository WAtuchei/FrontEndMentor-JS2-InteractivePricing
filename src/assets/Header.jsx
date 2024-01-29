import "../scss/header.scss"

function Header() {
   return (
      <header className="w-full flex flex-1">
         <div className="header-BG w-full text-center mt-[3rem] px-8 py-16">
            <h1>
               Simple, traffic-based pricing
            </h1>
            <p className="mt-3 px-16">
               Sign-up for our 30-day trial. No credit card required.
            </p>
         </div>
      </header>
   )
}
export default Header