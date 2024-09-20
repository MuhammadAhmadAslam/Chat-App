import React, { useState } from "react";
import { useRef, useEffect, useContext } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import "./Chat.css"
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router";
import { UserContext } from "../app context/Usercontext";
import { auth } from "../Firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
function ChatList() {

    const db = getFirestore(app);
    let navigate = useNavigate()
    let { user } = useContext(UserContext)
    let [allUsers, setAllUsers] = useState([])

    const auth = getAuth();
    const Currentuser = auth.currentUser;

    if (Currentuser) {
    } else {
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
        user.isLogin = false;
        user.userInfo.uid = ""
        user.userInfo.email = ""
        signOut(auth).then(() => {


        }).catch((error) => {
            console.log(error);

        });


        if (Currentuser) {
        } else {
            navigate('/login')
        }

    }


    let [userPorfile, setUser] = useState([])
    let gettingData = async () => {
        const querySnapshot = await getDocs(collection(db, "Users Information"));
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            data.uid == Currentuser.uid ? setUser(data) : ''
        });
    }


    useEffect(() => {
        gettingData()
        gettingUserChat()
    }, [])


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

    let gettingUserChat = () => {
        const collectionRef = collection(db, 'Users Information');
        onSnapshot(collectionRef, (querySnapshot) => {
            const allUsersArray = [];
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                allUsersArray.push(data);
            });
            setAllUsers(allUsersArray);
        });
    }


    allUsers.map((profile) => {
            console.log(profile.profilePicture , profile.username); 
    })

    return (
        <>
            <div className="main flex">

                <div className="flex-col  p-4 bg-white dark:bg-card rounded-lg shadow-md w-full xl:w-[40%] lg:w-[40%] py-5 border-r h-[100vh] overflow-hidden">
                    <div className="flex justify-between mb-2">
                        <span className="text-lg font-semibold">Chats</span>
                    </div>
                    <div className="flex justify-end items-center my-4">
                        {userPorfile.profilePicture ? (
                            <img src={userPorfile.profilePicture} alt="User Avatar" onClick={handlePopUp} className="w-[40px] h-[40px] mr-2" />
                        ) : (
                            <FaUserCircle onClick={handlePopUp} className="text-black text-3xl cursor-pointer" />
                        )}
                        <LuLogOut className="text-black text-3xl mx-3 cursor-pointer" onClick={handleSignOut} />
                    </div>
                    <div className="flex relative items-center mb-4">
                        <CiSearch className="absolute left-3" />
                        <input type="text" placeholder="Search..." className="w-full pl-10 bg-[#F0F2F5] p-2 outline-none rounded-lg dark:bg-input dark:text-foreground" />
                    </div>
                    <div className="overflow-y-scroll h-[100%] custom-scrollbar">
                    {
                        allUsers.map((user, index) => (
                            <Link to={`/chat/uid/${user.uid}/userName/:${user.username}/`} className="flex flex-col space-y-2">
                                <div className="flex items-center p-2 border-b border-border">
                                    <Image src={user.profilePicture} alt="User Avatar" width={60} height={60} />
                                    <div className="flex-1">
                                        <span className="font-semibold mx-4">{user.username}</span>
                                        {/* <span className="text-muted-foreground block">King Saud University</span> */}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    </div>
                </div>



                <div className="xl:w-[60%] lg:w-[60%] md:hidden sm:hidden lg:block xl:block hidden relative bg-[url(https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg)]">
                    <div className="flex flex-col justify-center text-white items-center h-[100%]">

                        <h1 className="text-4xl font-semibold text-center px-5 text-black">Ahmed Whatsapp For Windows Linux & MacOS </h1>
                        <p className="text-lg mt-4 text-center px-5 text-black">Send And Recieve Message Without Keeping Your Phone Online</p>
                    </div>

                </div>





            </div>
        </>
    )
}


export default ChatList;