const Postlists = ({posting}) => {
    return ( 
        <div className="">
            {
                    posting.map((posts) => (
                        <div className="w-full flex flex-col justify-center items-center h-30 mt-2">
                            <h1 className="uppercase font-bold">{posts.title}</h1>
                            <p>{posts.content}</p>
                        </div>
                    ))
                }
        </div>
     );
}
 
export default Postlists;
