import {  useState } from "react"
import questonList from "../Service/Service"
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  interface CorrectAnswers {
    [key: string]: string;
  }
    const navigate=useNavigate()
    const quizQuetions=questonList
    console.log(quizQuetions.length)
    
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [marks,setMarks]=useState(1)
    const [questionNumber,setQuestionNumber]=useState(0)
    const [hasSubmitted,setHasSubmitted]=useState(false)
  
  const checkAns = (ans: string) => {
      setSelectedAnswer(ans)
    }
    
    const handlesubmit = () => {
        let newMarks=marks
        const correctAns = quizQuetions[questionNumber].correct_answers as CorrectAnswers
        if (correctAns[selectedAnswer] === "true" && !hasSubmitted ) {
           
            setMarks(newMarks+1)
            setHasSubmitted(true)
        }
        if (questionNumber === 9) {
           navigate("/marks",{state:{marks:newMarks}})
       }
    }

    const nextQuestion = () => {
        if (questionNumber < 9) {
            setQuestionNumber((prev) => (prev + 1))
            console.log(marks)
            setHasSubmitted(false)
        }
        else {
            
            return
        }
    }
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Service()
//       setQuizQuestions(data)
//       console.log(data)
//     }
//     fetchData()
//   },[])

  return (
    <>
      <div className="h-[90%]  md:h-[30rem] bg-[#646189] flex flex-col items-center bg-opacity-20 backdrop-blur-sm border-opacity-30 shadow-lg shadow-[#211d2f] w-[60rem] rounded-lg py-4 md:p-8 mx-4 overflow-auto">

        <h1 className=" text-center text-white text-lg md:text-3xl">
          Q {questionNumber+1}:  {quizQuetions[questionNumber].question}
        </h1>
        <div className="flex flex-wrap w-[80%]  my-8 flex-col justify-around h-full">
                  <div className=" w-full justify-between flex">
                      <div>
                      <input type="radio" name={"question"+questionNumber} onChange={()=>checkAns("answer_a_correct")} id="answer_a" value={"answer_a_correct"} />
                      <label className="text-white text-md md:text-lg mx-4" htmlFor="answer_a">option A : <br/>{quizQuetions[questionNumber].answers.answer_a}</label>
                          
                      </div>
                      <div>
                      <input type="radio" name={"question"+questionNumber} onChange={()=>checkAns("answer_b_correct")} id="answer_b" value={"answer_b_correct"} />
                      <label className="text-white text-md md:text-lg mx-4" htmlFor="answer_b">option B : <br/>{quizQuetions[questionNumber].answers.answer_b}</label>
                          
                      </div>

            {/* <button className="bg-[#231B49] py-4 px-2 rounded-2xl text-white -w-[11rem] " onClick={()=>{checkAns("answer_a_correct_correct")}}>option A : <br/>{quizQuetions[questionNumber].answers.answer_a}</button>
          <button className="bg-[#231B49] py-4 px-2 rounded-2xl text-white -w-[11rem] " onClick={()=>{checkAns("answer_b_correct_correct")}}> option B :<br/> {quizQuetions[questionNumber].answers.answer_b}</button> */}
          </div>
          <div className=" w-full justify-between flex">
          <div>
          <input type="radio" name={"question"+questionNumber} onChange={()=>checkAns("answer_c_correct")} id="answer_c" value={"answer_c_correct"} />
          <label className="text-white text-md md:text-lg mx-4" htmlFor="answer_c">option C : <br/>{quizQuetions[questionNumber].answers.answer_c??"None of the Above"}</label>
              
          </div>
          <div>
          <input type="radio" name={"question"+questionNumber} onChange={()=>checkAns("answer_d_correct")} id="answer_d" value={"answer_c_correct"} />
          <label className="text-white text-md md:text-lg mx-4" htmlFor="answer_d">option D : <br/>{quizQuetions[questionNumber].answers.answer_d??"None of the Above"}</label>
              
          </div>

          </div>
              </div>
              <div className="w-full md:w-1/2 self-end flex  justify-between ">
          <button className="bg-[#231B49] py-4 px-2 rounded-2xl text-white hover:bg-[#43348b] w-[6rem]   " onClick={handlesubmit}>Submit</button>
          <button className="bg-[#231B49] py-4 px-2 rounded-2xl text-white hover:bg-[#43348b] w-[4rem] " onClick={nextQuestion}>Next</button>
                  
              </div>
      </div>
    </>
  )
}

export default Quiz
