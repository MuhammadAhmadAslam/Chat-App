import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Chat({border}) {
    return (
        <div className={`px-3 flex justify-start items-center border-b-[#ffffff6a]`}>
            <div>
                <FaUserCircle className="text-white text-4xl" />
            </div>
            <div className="flex justify-center items-start flex-col w-full px-3">
                <h3 className="text-white font-bold mt-2 text-[23px]"> Ahmed </h3>
                <p className="text-white mb-3">Message</p>
            </div>
        </div>
    )
}

export default Chat;