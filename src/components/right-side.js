import { useState } from "react";
import Postlist from "./fragment/postlist";
import RightContentS from "./fragment/right-list";
import Postlists from "./fragment/postlist";
const RightContent = () => {
    const icons = [{ name: "./images/twitter.png" }, { name: "./images/facebook-app-symbol.png" }, { name: "./images/instagram.png" }, { name: "./images/pinterest.png" }, { name: "./images/tumblr-logo.png" }, { name: "./images/radio.png" }]

    const [labels, setLabels] = useState([
        { vegies: "Beverage", title: "Helps in urinating" }, { vegies: "Cookies", title: "will gain weight" }, { vegies: "pineaple", title: "very sweet" }, { vegies: "sausage", title: "good for indomie" }, { vegies: "vegetable", title: "good for your health" }
    ])

    const post = [{ title: "Dry Rosted clam flatbread", content: "What a delicious treat! I pre-baked the flat bread so that we could grill it outside, and it grilled up beautifully. The clams were sweet" }, { title: "steamed kielabasa beverage", content: "Prick each sausage in several places with tip of small knife. Pour beer into bottom of pan fitted with" }, { title: "Redish steamed kielabasa sea fish", content: "Prick each sausage in several places with tip of small knife. Pour beer into bottom of pan fitted with steaming rack or basket" }]

    // const Importance = () => {

    //     setLabels({labels.title})
    // }

    return (
        <div className=" w-29 h-full">
            <div className="flex flex-col items-center">
                <h1 className="uppercase font-bold text-sm tracking-widest">hello</h1>
                <p className="mt-1 ">Text refers to the actual words written in a book, newspaper, blog post, or any other written work. Pictures, charts, and other images are not text. When you read something, you are looking at text and using your language skills to get meaning out of it. Something that doesn’t contain any text is textless.</p>
                <p className="uppercase mt-8 font-bold tracking-widest">Get socials</p>
                <div className="w-4/5 h-8 flex justify-evenly items-center mt-6">
                    {icons.map((icon) => (
                        <img src={icon.name} className="w-4 h-4" />
                    ))}
                </div>
                <h1 className="uppercase mt-8 font-bold tracking-widest">labels</h1>
              <RightContentS labels={labels}/>

                <h3 className="uppercase font-bold tracking-widest mt-16">popular post</h3>
                <div className="w-full mt-4 h-86">
                    <Postlists posting={post} />
                </div>

                <label for="archive " className="uppercase font-bold tracking-widest mt-4">archive</label>
                <select name="archive" id="archive" className="w-full mt-2 outline-none bg-transparent border-2 border-gray-500">
                    <option value="ARCHIVES">ARCHIVES</option>
                    <option value="potatoes">orange</option>
                    <option value="potatoes">pineaple</option>
                </select>
                <h1 className="font-bold tracking-widest uppercase mt-7">Search this blog</h1>
                <input type="text" for="search" className="w-full mt-2  outline-none bg-transparent border-2 border-gray-500 placeholder:ml-2 focus:placeholder:text-transparent pl-2 pr-3 " placeholder="Type + Enter" />
            </div>

        </div>

    );
}

export default RightContent;




