const RightContentS = ({labels}) => {
    return ( <div className="">
        <div className="w-full h-48">
                {labels.map((label) => (
                        <button className="w-full h-9 mt-2 text-white bg-slate-700 uppercase">{label.vegies}</button>
                    ))}
                </div>
                
    </div> );
}
 
export default RightContentS;