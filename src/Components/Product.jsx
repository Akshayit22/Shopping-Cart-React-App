import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/slices/CartSlice";

const Product = ({post}) =>{

    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to cart");
    }
    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item Removed from cart");
    }

    return (

        <div className="flex flex-col items-center justify-between transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-lg hover:scale-110">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                    {post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="w-full h-full"/>
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>
                    {
                        cart.some((p)=> p.id == post.id) ?
                        (<button onClick={removeFromCart} 
                            className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase outline
                                        hover:bg-gray-700
                                        hover:text-white transition duration-300 ease-in">
                            Remove Item</button>) :
                        (<button onClick={addToCart} 
                            className="text-gray-700 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase outline
                                    hover:bg-gray-700
                                    hover:text-white transition duration-300 ease-in">
                            Add to Cart</button>)

                    }
            </div>
        </div>
    
    
    
    )
};

export default Product;