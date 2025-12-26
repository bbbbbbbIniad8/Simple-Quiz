type Props = {
    children: React.ReactNode
}

function MainWindow({children}: Props){
    return (
    <div className="p-3 flex flex-col items-center border border-solid border-black">
        {children}
    </div>
    )
}

export default MainWindow