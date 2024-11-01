import "../output.css"
import { useState } from 'react';

export default function QuizContent(prop){
    let [index , setIndex] = useState(0)
    let [score , setScore] = useState(0)
    let questionLength = Object.keys(prop).length
    function displayRadioValue() {
        let ele = document.getElementsByName('Option');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                return ele[i]
            }
        }
    }

    function nextQuestion(){
        setIndex(index+1)
    }

    function handleClick() {
        let checkAnswer = displayRadioValue()
        if(checkAnswer.value === "true"){
            setScore(score+=1)
        }
        nextQuestion()
    }
    function startAgainClick(){
        setIndex(0);
        setScore(0)
    }

    if (index === questionLength){
        return (
            <div className="w-full h-fit text-center">
                <h1 className="text-3xl bg-slate-800 text-white font-bold p-5 rounded-full mb-5">Score : {score}</h1>
                <button onClick={startAgainClick}
                        className="px-5 py-2 font-bold rounded-full bg-red-600 hover:bg-red-700 text-white">Try Again</button>
            </div>
    )
    } else {
     return (
             <div>
                 <h1 className="text-3xl bg-slate-800 text-white font-bold p-5 rounded-full mb-5"> {prop[index].id} - {prop[index].questionText}</h1>

                 <div className="flex justify-center items-center gap-5 mb-16">
                     <label id={`label` + prop[index].answerOption[0].id}
                            className="font-bold text-lg bg-white p-2 rounded-full checked:text-white flex justify-center items-center gap-2 w-fit h-fit">
                         <input type="radio" name="Option" value={prop[index].answerOption[0].isCorrect}/>
                         {prop[index].answerOption[0].answerText}
                     </label>

                     <label id={`label` + prop[index].answerOption[1].id}
                            className="font-bold text-lg bg-white p-2 rounded-full checked:text-white flex justify-center items-center gap-2 w-fit h-fit">
                         <input type="radio" name="Option" value={prop[index].answerOption[1].isCorrect}/>
                         {prop[index].answerOption[1].answerText}
                     </label>

                     <label id={`label` + prop[index].answerOption[2].id}
                            className="font-bold text-lg bg-white p-2 rounded-full checked:text-white flex justify-center items-center gap-2 w-fit h-fit">
                         <input type="radio" name="Option" value={prop[index].answerOption[2].isCorrect}/>
                         {prop[index].answerOption[2].answerText}
                     </label>

                     <label id={`label` + prop[index].answerOption[3].id}
                            className="font-bold text-lg bg-white p-2 rounded-full checked:text-white flex justify-center items-center gap-2 w-fit h-fit">
                         <input type="radio" name="Option" value={prop[index].answerOption[3].isCorrect}/>
                         {prop[index].answerOption[3].answerText}
                     </label>
                 </div>

                 <div className="w-full h-fit text-center">
                    <button onClick={()=>{handleClick()}} className="px-5 py-2 font-bold rounded-full bg-green-600 hover:bg-green-700 text-white">Next Question</button>
                 </div>

             </div>
         )
    }
}