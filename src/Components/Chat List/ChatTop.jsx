import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { AiFillAudio } from "react-icons/ai";
import Chat from "./Chat";


function ChatTop() {
    return (
        <div className="top w-full border-b-[1px] h-[70px] flex justify-between items-center">
            <div className="left">
                <Chat />
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