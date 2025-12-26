import MainWindow from "./window"

type Props = {
    quizMax: number
    onStart: () => void;
}

function StartWindow({quizMax, onStart}: Props){
    return(
        <MainWindow>
          <p className="py-5 text-4xl">csvファイルの読み取りに成功しました</p>
          <p className="pb-5 text-3xl">全{quizMax}問</p>
          <button className="p-3 text-3xl border" onClick={onStart} autoFocus>開始</button>
        </MainWindow>
    )

}

export {StartWindow}