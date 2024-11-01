import "../output.css"
import QuizContent from "../quiz-content/quiz-content'";
import {questionList} from "../quiz-content/data";
export default function QuizContainer(){
    return(
        <div>
            <QuizContent {...questionList} />
        </div>
    )
}