import React from 'react'
import { useLocation } from 'react-router-dom'

const Marks = () => {
    const location = useLocation();
    const marks = location.state?.marks
    console.log(marks)
  return (
    <>
          <div className="  h-[30rem] bg-[#646189] flex flex-col items-center bg-opacity-20 backdrop-blur-sm border-opacity-30 shadow-lg shadow-[#211d2f] w-[60rem] rounded-lg p-8 mx-4 ">
              
            <div className='text-6xl text-center text-white'> Marks</div>
              <div className='text-3xl text-center text-white mt-24 '> { marks}</div>


      </div>
    </>
  )
}

export default Marks
