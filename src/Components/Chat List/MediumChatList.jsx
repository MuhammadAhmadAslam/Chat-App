import React, { useContext, useRef, useEffect, useState } from "react";
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
import { LuLogOut } from "react-icons/lu";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router";
import { UserContext } from "../app context/Usercontext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../Firebase/firebase";
import Popup from "./Popup";
function MediumChat() {



    const db = getFirestore(app);
    const chatEndRef = useRef(null);
    let navigate = useNavigate()
    let { user } = useContext(UserContext)
    console.log(user);
    const [showPopup, setShowPopup] = useState(false);

    const auth = getAuth();
    const Currentuser = auth.currentUser;

    if (Currentuser) {
        console.log('user login ha if ki condition mae');
    } else {
        console.log('user login nahe ha if ki condition mae');
        navigate('/login')
    }



    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    useEffect(() => {
        scrollToBottom();
    }, []);


    let handleSignOut = () => {
        console.log('logout.... ');
        user.isLogin = false;
        user.userInfo.uid = ""
        user.userInfo.email = ""
        signOut(auth).then(() => {
            console.log('logout successfully');

        }).catch((error) => {
            console.log('masla arha ha');
            console.log(error);

        });


        if (Currentuser) {
            console.log('user login ha if ki condition mae');
        } else {
            console.log('user login nahe ha if ki condition mae');
            navigate('/login')
        }

    }


    let [userPorfile, setUser] = useState([])
    let gettingData = async () => {
        const querySnapshot = await getDocs(collection(db, "Users Information"));
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            console.log(data.uid);
            console.log(Currentuser.uid);
            console.log(data.uid == Currentuser.uid);
            data.uid == Currentuser.uid ? setUser(data) : ''
        });
    }


    useEffect(() => {
        gettingData()
        console.log(userPorfile, 'user profile');
    }, [])




    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <>
            <div className="main flex">

                <div className="w-full xl:w-[40%] lg:w-[40%] py-5 border-r h-[100vh] overflow-hidden">


                    <div className="flex justify-between items-center">
                        <h1 className="text-white px-3 text-2xl font-semibold">Chats</h1>
                        <div className="flex justify-center items-center">
                            <FaCirclePlus className="text-white text-3xl cursor-pointer" />
                            {
                                userPorfile.profilePicture ? <img src={userPorfile.profilePicture} className="w-[30px] cursor-pointer rounded-full mx-3" onClick={handleTogglePopup} /> : <FaUserCircle className="text-white text-3xl cursor-pointer" onClick={handleTogglePopup} />
                            }

                            <LuLogOut className="text-white text-3xl mx-3 cursor-pointer" onClick={handleSignOut} />
                        </div>
                        {showPopup && (
                            <Popup user={userPorfile} onClose={handleTogglePopup} />
                        )}
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
                    <ChatTop />

                    {/* Center Area for Chat Messages */}
                    <ChatCenter />

                    {/* Bottom Input Area */}
                    <div className="bottom overflow-hidden flex justify-center items-center fixed bottom-0 right-0 w-[60%] h-[60px] bg-gray-800 p-2">
                        <IoMdAttach className="text-white text-3xl mx-3 cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Type A Message....."
                            className="bg-transparent text-xl resize-none placeholder:text-start placeholder:pt-3 placeholder:text-white placeholder:font-semibold border w-full h-[50px] outline-none text-white px-3"
                        />
                        <AiFillAudio className="text-white text-3xl mx-3 cursor-pointer" />
                    </div>
                </div>





            </div>
        </>
    )
}


export default MediumChat;