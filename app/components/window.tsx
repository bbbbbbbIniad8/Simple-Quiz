type Props = {
    children: React.ReactNode
}

function MainWindow({children}: Props){
    return (
    <div className="p-3 flex flex-col items-center
         border border-solid bg-gray-100
         border-black w-full text-A shadow-md rounded-md">
        {children}
    </div>
    )
}

export default MainWindow