import MainWindow from "./window"

type Props = {
    currect: boolean
    currectWord: string
}

function SubResult({currect, currectWord}: Props){
    return (
        <MainWindow>
            {currect ? 
            <div className="py-30 text-4xl text-blue-700">正解</div>:
            <>
            <div className="pt-10 text-4xl text-red-700">不正解</div>
            <div className="pb-10 text-3xl">正解は{currectWord}</div>
            </>}
        </MainWindow>
    )
}

export default SubResult;