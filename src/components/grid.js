import { useState } from "react";
import List from "./fragment/list";
import LeftContent from "./left_items";
import RightContent from "./right-side";
const Grid = () => {
    const [list, setlist] = useState([
        { name: "Home" }, { name: "Contact" }, { name: "About" }, { name: "Sponser" }, { name: "Get This Theme" }
    ])
    return (<div className="w-full h-128 bg-gray-200 grid grid-cols-8 grid-rows-6">
        <div className="col-start-2 col-end-8 flex flex-col items-center row-start-1 row-end-6 shadow-xl">
            <List list_1={list} />
            <div className="w-full h-40 flex flex-col justify-center items-center bg-white">
                <h1 className="text-6xl font-semibold">EMERGE</h1>
                <p className="mt-3 mb-20 text-gray-500 ">THIS MORDEN BLOGERS TEMPLATE</p>
            </div>
            <div className="w-90 h-full flex">
            <div className="w-71 h-full">
                <LeftContent />
            </div>
            <div className="w-40 flex justify-end h-full">
                <RightContent />
            </div>
            </div>
        </div>
    </div>);
}

export default Grid;