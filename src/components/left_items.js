import { useState } from "react";
import Text from "./fragment/text";

const LeftContent = () => {
const [name, setName] = useState("Read more")

const ChangeName = () =>{
    setName("Continue")
}
    return (<div className="App">

        <div className=" flex flex-col items-center">
            <p className="text-gray-400 font-light text-sm">10/08/2020</p>
            <h2 className="uppercase font-bold text-xl">Dry-roasted clam flatbread</h2>
            <img src="./images/Free Responsive Blogger Theme.jpgkjl.jpg" className="w-full mt-3"/>
            <Text />
            <button onClick={ChangeName} className="uppercase border-2 w-24 mt-10
             border-gray-500">{name}</button>
       <p className="uppercase font-bold text-xl mt-20">steamed kielbasa beverage</p>
       <img src="./images/mine.jpg" className="w-full mt-4"/>
        </div>
    </div>);
}

export default LeftContent;