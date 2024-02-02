import './App.css'
import Header from './assets/layouts/Header'
import MainBody from './assets/layouts/MainBody'

function App() {

  return (
    <div
      id='app-container'
      className='w-full flex flex-col justify-center items-center'>
      <Header />
      <MainBody />
    </div>
  )
}
export default App