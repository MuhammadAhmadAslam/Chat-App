import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
function ChatList() {
    return (
        <>

            <div className="w-full xl:w-[40%] lg:w-[40%] py-5 border-r h-[100vh] overflow-hidden">


                <div className="flex justify-between items-center">
                    <h1 className="text-white px-3 text-2xl font-semibold">Chats</h1>
                    <div className="flex">
                        <FaCirclePlus className="text-white text-3xl cursor-pointer" />
                        <SlOptionsVertical className="text-white text-3xl mx-3 cursor-pointer" />
                    </div>
                </div>


                <div className="flex justify-center items-center">
                    <input type="text" placeholder="Search......" className="w-[85%] mt-5 bg-transparent border-2 h-[35px] outline oultine-blue-600 border-blue-500 px-2 text-white" />
                </div>

                <div className="mt-4 overflow-y-scroll">

                    <div className="px-3 flex justify-start items-center border">
                        <div>
                            <FaUserCircle className="text-white text-4xl" />
                        </div>
                        <div className="flex justify-center items-start flex-col w-full px-3">
                                <h3 className="text-white font-bold mt-2 text-[23px]"> Ahmed </h3>
                                <p className="text-white mb-3">Message</p>
                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}


export default ChatList;