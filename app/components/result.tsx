import MainWindow from "./window";

type Props = {
    correctLst: string[];
    incorrectLst: string[];
    resetEvent: () => void;
}

function Result({correctLst, incorrectLst, resetEvent}: Props){
    const correctNum = correctLst.length;
    const incorrectNum = incorrectLst.length;

    return(
        <MainWindow>
        <div>結果発表</div>
        <div>正解数: {correctNum}</div>
        <div>不正解数: {incorrectNum}</div>
        <div>間違えた回答は以下の通りです。</div>
        {incorrectLst.map((item, index) =>(
            <div key={index}>
                {item}
            </div>
        ))}
        <button onClick={resetEvent} onKeyDown={(e) => { if (e.key === 'Enter') resetEvent();}} autoFocus>最初から</button>
        </MainWindow>
    )
}

export default Result;