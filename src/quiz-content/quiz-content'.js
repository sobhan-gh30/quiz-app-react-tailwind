import "../output.css"
import {questionList} from "./data";
// import { useState } from 'react';

export default function QuizContent(){
     return (
     <div>
         <h1>{questionList[0]}</h1>
     </div>
     )
}