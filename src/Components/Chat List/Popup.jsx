// Popup.jsx
import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
function Popup({ user, onClose }) {
    return (
        <div className="fixed -top-7 bg-black w-[94%] lg:w-[40%] overflow-hidden xl:w-[40%] md:w-[70%] md:left-0 z-20 translate-y-1/2 bg-transparent shadow-md p-4">
            <div className="flex flex-col items-center">
                <img src={user?.profilePicture} alt={user.displayName} className="w-12 h-12 rounded-full mb-2" />
                <div className="text-center">
                    <h2 className="text-lg font-bold text-white">{user.username}</h2>
                    <p className="text-white">UID: {user.uid}</p>
                    <p className="text-white">Email: {user.email}</p>
                </div>
                <button className="absolute text-4xl top-2 right-4 text-white" onClick={onClose}>
                    <IoCloseCircleSharp />
                </button>
            </div>
        </div>
    );
}

export default Popup;