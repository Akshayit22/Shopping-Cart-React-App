import {AiFillDelete} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,itemIndex}) =>{

    const dispatch = useDispatch();


    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    return (
        <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
            <div className="flex flex-row md:flex-row p-0 md:p-3 gap-5 items-center shadow-lg">
                <div className="w-[30%]">
                    <img className="object-cover " src={item.image}/>
                </div>
                <div>
                    <div >
                        <h1 className="text-xl text-slate-700 font-semibold pb-3">{item.title}</h1>
                        <h1 className="space-y-5 w-[100%]">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
                    </div>

                    <div className="flex items-center justify-between pt-5">
                        <p className="font-bold text-lg text-green-600">${item.price}</p>
                        <div onClick={removeFromCart} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                            <AiFillDelete/>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>

    )
};

export default CartItem;