import MainWindow from "./window"

type Props = {
    currect: boolean
    currectWord: string
}

function SubResult({currect, currectWord}: Props){
    return (
        <MainWindow>
            {currect ? 
            <div>正解</div>:
            <>
            <div>不正解</div>
            <div>正解は{currectWord}</div>
            </>}
        </MainWindow>
    )
}

export default SubResult;