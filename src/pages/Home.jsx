import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () =>{

    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [endPost,setEndPost] = useState(8);
    const [Alldata,setAllData] = useState([]);

    async function fetchProductsData(){
        setLoading(true);

        try{
            const resp = await fetch(API_URL);
            const data = await resp.json();
            setAllData(data);
            setPosts(data.slice(0,endPost));

        }catch(error){
            console.log("something went wrong");
        }
        setLoading(false);
    }

    function moreHandler(){
        setEndPost(endPost+4);
        console.log(endPost);
        setPosts(Alldata.slice(0,endPost));
    }

    useEffect( ()=>{
        fetchProductsData();
    },[]);

    return (
        <div>
            {
                loading ? <Spinner></Spinner> : 
                posts.length > 0 ?
                (
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid xs:grid-cols-1 sl:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                            {
                                posts.map( (post) =>(
                                    <Product key={post.id} post={post}></Product>
                                ))
                            
                            }
                        </div>
                        {
                            endPost !== 24 &&
                            (
                                <div className="items-center justify-center pb-[20px]">
                                    <button onClick={moreHandler} 
                                            className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                                    See More</button>
                                </div>
                            )
                        }
                        

                    </div>
                    
                ) :
                (
                    <div className="flex justify-center items-center"><p>No Data Found</p></div>
                )
            }
        </div>
    )
};

export default Home;