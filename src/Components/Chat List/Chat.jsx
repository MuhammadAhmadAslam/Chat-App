import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Chat({ userName, userProfile, uid }) {
    
    return (
        <div className={`px-3 flex justify-start items-center mt-5 border-b-[#ffffff6a]`} key={uid}>
            <div>
                {
                    userProfile ? <img src={userProfile} alt='User Profile'
                        className="object-fit border-2 border-white shadow-md w-[50px] h-[50px] rounded-full" /> :
                        <FaUserCircle className="text-white text-4xl" />
                }
            </div>
            <div className="flex justify-center items-start flex-col w-full px-3">
                <h3 className="text-white font-bold mt-2 text-[23px]"> {userName} </h3>
            </div>
        </div>
    )
}

export default Chat;