import MainWindow from "./window"

type Props = {
    quizMax: number
    onStart: () => void;
}

function StartWindow({quizMax, onStart}: Props){
    return(
        <MainWindow>
          <p>csvファイルの読み取りに成功しました</p>
          <p>全{quizMax}問</p>
          <button className="p-3 border" onClick={onStart} autoFocus>開始</button>
        </MainWindow>
    )

}

export {StartWindow}