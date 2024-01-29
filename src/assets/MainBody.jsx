import "../scss/mainBody.scss"
import Slider from "./components/Slider"

function MainBody() {
   return (
      <div className="container flex flex-1 justify-center">
         <section className="App-body p-8 text-center bg-white">
            <p className="uppercase">
               100k pageviews
            </p>
            <Slider />
         </section>
      </div>
   )
}
export default MainBody