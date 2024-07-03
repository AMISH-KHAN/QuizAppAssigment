import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quiz from "./Components/Quiz"
import Marks from "./Components/Marks"


function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#0F0535] flex justify-center items-center -z-30 bg-[url('/assets/galaxy.svg')] bg-cover bg-center">
      <BrowserRouter>
        <Routes>

            <Route path="/" element={ <Quiz/>} />
            <Route path="/marks" element={ <Marks/>} />
       
      
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
