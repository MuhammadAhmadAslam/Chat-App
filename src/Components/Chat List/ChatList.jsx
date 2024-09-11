import React, { useState } from "react";
import { useRef, useEffect, useContext } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import Chat from "./Chat";
import ChatTop from "./ChatTop";
import "./Chat.css"
import ChatCenter from "./ChatCenter";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import { UserContext } from "../app context/Usercontext";
import { auth } from "../Firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../Firebase/firebase";
import Swal from "sweetalert2";
function ChatList() {

    const db = getFirestore(app);
    let navigate = useNavigate()
    let { user } = useContext(UserContext)
    console.log(user);

    const auth = getAuth();
    const Currentuser = auth.currentUser;

    if (Currentuser) {
        console.log('user login ha if ki condition mae');

    } else {
        // No user is signed in.
        console.log('user login nahe ha if ki condition mae');
        navigate('/login')
    }


    const chatEndRef = useRef(null);


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


    let [userPorfile , setUser] = useState([])
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
        console.log(userPorfile , 'user profile');
   } ,[] )


    let handlePopUp = () => {
        Swal.fire({
            title: '<h1>User Profile</h1>',
            html: `<img src=${userPorfile?.profilePicture} alt="Image" style="display: block; margin: 20px auto; width: 80px; height:80px; border-radius: 50%;">` +
                  `<h1 style="font-size: 30px; font-weight: bold;">${userPorfile.username}</h1>` +
                  `<p>Email : ${userPorfile.email}</p>` +
                  `<p>UID : ${userPorfile.uid}</p>` +
                  `<p></p>`,
            confirmButtonText: 'OK',
            confirmButtonColor: '#000'
          })
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
                                userPorfile.profilePicture ? <img src={userPorfile?.profilePicture} className="w-[30px] cursor-pointer rounded-full mx-3" onClick={handlePopUp}/> :  <FaUserCircle className="text-white text-3xl cursor-pointer" />
                            }
                           
                            <LuLogOut className="text-white text-3xl mx-3 cursor-pointer" onClick={handleSignOut} />
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