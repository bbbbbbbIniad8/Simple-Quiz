import MainWindow from "./window"

type Props = {
    quizNum: number;
    quizMsg: string;
    answerEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function QuizWindow({quizNum, quizMsg, answerEvent}: Props){
    return(
        <MainWindow>
          <p className="py-5 font-medium w-25 text-4xl">{quizNum}問目</p>
          <p className="text-3xl">{quizMsg}</p>
          <input type="text" className="my-3 border border-solid border-black bg-white text-center text-3xl" onKeyDown={answerEvent} autoFocus></input>
        </MainWindow>
    )
}

export {QuizWindow}