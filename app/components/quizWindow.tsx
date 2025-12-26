import MainWindow from "./window"

type Props = {
    quizNum: number;
    quizMsg: string;
    answerEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function QuizWindow({quizNum, quizMsg, answerEvent}: Props){
    return(
        <MainWindow>
          <p className="px-2 size-4 font-medium w-15">{quizNum}問目</p>
          <p>{quizMsg}</p>
          <input type="text" className="border border-solid border-black" onKeyDown={answerEvent} autoFocus></input>
        </MainWindow>
    )
}

export {QuizWindow}