

const List = ({list_1}) => {


    return ( <div className="w-full h-20 flex  justify-center bg-white">{list_1.map((blog)=>(
        <ul className="mt-1 mr-12 text-gray-500 hover:text-black hover:font-bold">
            <li>{blog.name}</li>
        </ul>
    ))}</div> );
}
 
export default List;