import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";
import Chat from "./Chat";
import { Link } from "react-router-dom";


function ChatTop() {
    return (
        <div className="top w-full border-b-[1px] h-[70px] flex justify-between items-center">
            <div className="left flex justify-center items-center">
            <Link to={'/'}>
            <FaArrowCircleLeft className="text-white text-3xl mx-2"  />
            </Link>
                <Chat  />
            </div>
            <div className="right flex">
                <IoCallOutline className="text-white text-3xl mx-3 cursor-pointer" />
                <MdOutlineVideoCall className="text-white text-3xl mx-3 cursor-pointer" />
                <SlOptionsVertical className="text-white text-3xl mx-3 cursor-pointer" />
            </div>
        </div>
    )
}

export default ChatTop;