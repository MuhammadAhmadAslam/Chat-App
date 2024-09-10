import React from "react";
import { useRef, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import Chat from "./Chat";
import ChatTop from "./ChatTop";
import "./Chat.css"
import ChatCenter from "./ChatCenter";
function ChatList() {


    const chatEndRef = useRef(null);


    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    useEffect(() => {
        scrollToBottom();
    }, []);



    return (
        <>
            <div className="main flex">

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

                    <div className="overflow-y-scroll h-[100%] custom-scrollbar">
                        <div className="mt-4 overflow-hidden">
                            <Chat />
                            <Chat />
                        </div>
                    </div>
                </div>


                <div className="xl:w-[60%] lg:w-[60%] md:hidden sm:hidden lg:block xl:block hidden relative">
                    <div className="flex flex-col justify-center text-white items-center h-[100%]">

                    <h1 className="text-4xl font-semibold text-center px-5">Ahmed Whatsapp For Windows Linux & MacOS </h1>
                    <p className="text-lg mt-4 text-center px-5">Send And Recieve Message Without Keeping Your Phone Online</p>
                    </div>

                {/* 
                    <ChatTop />

                    
                    <ChatCenter />

                   
                    <div className="bottom overflow-hidden flex justify-center items-center fixed bottom-0 right-0 w-[60%] h-[60px] bg-gray-800 p-2">
                        <IoMdAttach className="text-white text-3xl mx-3 cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Type A Message....."
                            className="bg-transparent text-xl resize-none placeholder:text-start placeholder:pt-3 placeholder:text-white placeholder:font-semibold border w-full h-[50px] outline-none text-white px-3"
                        />
                        <AiFillAudio className="text-white text-3xl mx-3 cursor-pointer" />
                    </div>
                */}
                </div> 





            </div>
        </>
    )
}


export default ChatList;