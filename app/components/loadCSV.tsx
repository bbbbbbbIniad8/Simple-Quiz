import React from "react";
import MainWindow from "./window";

type Props = {
    loadEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function LoadCSV({loadEvent}: Props){
    return (
        <MainWindow>
            <label className="text-4xl">
                    ここをクリックしてCSVファイルを選択
                <input className="hidden" type="file" accept=".csv" onChange={loadEvent} />
            </label>
        </MainWindow>
    )
}

export default LoadCSV;