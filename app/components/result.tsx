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
            <div className="h-100 flex flex-col items-center">
            <div className="m-3 p-3 font-semibold w-150 text-3xl bg-green-200 text-center">結果発表</div>
                <div className="flex flex-row ">
                <div className="flex flex-col font-medium text-2xl">
                    <div className="mt-2">正解数: {correctNum}</div>
                    <div className="mt-2">不正解数: {incorrectNum}</div>
                </div>
                {incorrectNum !== 0 &&
                    <div className="mx-10 flex flex-col h-50
                                    font-medium text-2xl text-center">
                    <div>間違えた回答は以下の通りです。</div>
                    <div className="overflow-scroll"> 
                    {incorrectLst.map((item, index) =>(
                    <div key={index}>
                        {item}
                    </div>
                    
                ))}
                    </div>
                    </div>
                }
            </div>
            
            <button className="mt-10 p-2 border"
            onClick={resetEvent} onKeyDown={(e) => { if (e.key === 'Enter') resetEvent();}}
            autoFocus>最初から</button>
            </div>
        </MainWindow>
    )
}

export default Result;