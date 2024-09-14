// import React, { useContext, useRef, useEffect, useState } from "react";

// import { FaCirclePlus } from "react-icons/fa6";
// import { SlOptionsVertical } from "react-icons/sl";
// import { FaUserCircle } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io5";
// import { MdOutlineVideoCall } from "react-icons/md";
// import { IoMdAttach } from "react-icons/io";
// import { AiFillAudio } from "react-icons/ai";
// import Chat from "./Chat";
// import ChatTop from "./ChatTop";
// import "./Chat.css"
// import ChatCenter from "./ChatCenter";
// import { LuLogOut } from "react-icons/lu";
// import { signOut, getAuth } from "firebase/auth";
// import { auth } from "../Firebase/firebase";
// import { useNavigate, useParams } from "react-router";
// import { UserContext } from "../app context/Usercontext";
// import { collection, getDocs, getFirestore, onSnapshot, doc, updateDoc, getDoc } from "firebase/firestore";
// import { app } from "../Firebase/firebase";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { IoMdSend } from "react-icons/io";
// import { FaArrowCircleLeft } from "react-icons/fa";
// function MediumChat() {

//     const db = getFirestore(app);
//     const chatEndRef = useRef(null);
//     let navigate = useNavigate()
//     let { user } = useContext(UserContext)
//     let [allUsers, setAllUsers] = useState([])
//     let { uid } = useParams()
//     console.log(uid, "uid from params");
//     let [msgInput, setMsgInput] = useState('')
//     const auth = getAuth();
//     const Currentuser = auth.currentUser;

//     if (Currentuser) {
//     } else {
//         navigate('/login')
//     }



//     const scrollToBottom = () => {
//         chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };


//     let handleSignOut = () => {
//         user.isLogin = false;
//         user.userInfo.uid = ""
//         user.userInfo.email = ""
//         signOut(auth).then(() => {

//         }).catch((error) => {
//             console.log(error);

//         });


//         if (Currentuser) {
//         } else {
//             navigate('/login')
//         }

//     }


//     let [userPorfile, setUser] = useState([])

//     // getting user information 
//     let gettingData = async () => {
//         const querySnapshot = await getDocs(collection(db, "Users Information"));
//         querySnapshot.forEach((doc) => {
//             let data = doc.data()
//             data.uid == Currentuser.uid ? setUser(data) : ''
//         });
//     }






//     let [userMsg, setUserMsg] = useState([])

//     // let gettingMessages = async () => {
//     //     let allMsg = []
//     //     const querySnapshot = await getDocs(collection(db, "User Chats"));
//     //     querySnapshot.forEach((doc) => {
//     //         let data = doc.data()
//     //         if (data.uid == Currentuser.uid) {
//     //             setUserMsg(data.userChats)
//     //             console.log('chala gaya');

//     //         }
//     //     });

//     // }

//     // console.log(userMsg.find(uid) , "user msg");



//     // getting user information 

//     let gettingMessages = async () => {
//         let allMsg = []
//         const querySnapshot = await getDocs(collection(db, "User Chats"));
//         querySnapshot.forEach((doc) => {
//             let data = doc.data()
//             if (Object.keys(data.userChats).includes(uid)) {
//                 setUserMsg(data.userChats[uid])
//                 console.log('chala gaya');
//             }
//         });
//     }





//     useEffect(() => {
//         gettingMessages()
//         gettingData()
//         gettingUserChat()
//         scrollToBottom()
//     }, [])


// // handling popup when user clicked on his profile so the popup will show 

//     let handlePopUp = () => {
//         Swal.fire({
//             title: '<h1>User Profile</h1>',
//             html: `${userPorfile.profilePicture ? '<img src=${userPorfile?.profilePicture} alt="Image" style="display: block; margin: 20px auto; width: 80px; height:80px; border-radius: 50%;">' : <FaUserCircle onClick={handlePopUp} className="text-white text-3xl cursor-pointer" />}` +
//                 `<h1 style="font-size: 30px; font-weight: bold;">${userPorfile.username}</h1>` +
//                 `<p>Email : ${userPorfile.email}</p>` +
//                 `<p>UID : ${userPorfile.uid}</p>` +
//                 `<p></p>`,
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#000'
//         })
//     }



//     let gettingUserChat = () => {
//         const collectionRef = collection(db, 'Users Information');
//         onSnapshot(collectionRef, (querySnapshot) => {
//             const allUsersArray = [];
//             querySnapshot.forEach((doc) => {
//                 let data = doc.data();
//                 allUsersArray.push(data);
//             });
//             setAllUsers(allUsersArray);
//         });
//     }








//     // sent msg function sent msg function sent msg function sent msg function sent msg function 
//     let sentMsg = async () => {
//         const msgUpdate1 = doc(db, "User Chats", Currentuser.uid);
//         const msgUpdate2 = doc(db, "User Chats", uid);

//         const userChatsRef1 = await getDoc(msgUpdate1);
//         const userChatsRef2 = await getDoc(msgUpdate2);
//         const userChatsData1 = userChatsRef1.data();
//         const userChatsData2 = userChatsRef2.data();


//         // stroing data in current user firestore stroing data in current user firestore stroing data in current user firestore 
//         if (userChatsData1 && userChatsData1.userChats && userChatsData1.userChats[String(uid)]) {
//             await updateDoc(msgUpdate1, {
//                 userChats: {
//                     [String(uid)]: [...userChatsData1.userChats[String(uid)], {
//                         senderUid: Currentuser.uid,
//                         recieverUid: uid,
//                         message: msgInput,
//                         time: new Date().toLocaleTimeString(),
//                         day: new Date().toDateString()
//                     }]
//                 }
//             });
//         } else {
//             await updateDoc(msgUpdate1, {
//                 userChats: {
//                     [String(uid)]: [
//                         {
//                             senderUid: Currentuser.uid,
//                             recieverUid: uid,
//                             message: msgInput,
//                             time: new Date().toLocaleTimeString(),
//                             day: new Date().toDateString()
//                         }
//                     ]
//                 }
//             });
//         }

//         // stroing data in current user firestore stroing data in current user firestore stroing data in current user firestore 



//         // stroing data in current chat firestore stroing data in current chat firestore stroing data in current chat firestore stroing data in current chat firestore 

//         if (userChatsData2 && userChatsData2.userChats && userChatsData2.userChats[String(uid)]) {
//             await updateDoc(msgUpdate2, {
//                 userChats: {
//                     [String(uid)]: [...userChatsData2.userChats[String(uid)], {
//                         senderUid: Currentuser.uid,
//                         recieverUid: uid,
//                         message: msgInput,
//                         time: new Date().toLocaleTimeString(),
//                         day: new Date().toDateString()
//                     }]
//                 }
//             });
//         } else {
//             await updateDoc(msgUpdate2, {
//                 userChats: {
//                     [String(uid)]: [
//                         {
//                             senderUid: Currentuser.uid,
//                             recieverUid: uid,
//                             message: msgInput,
//                             time: new Date().toLocaleTimeString(),
//                             day: new Date().toDateString()
//                         }
//                     ]
//                 }
//             });
//         }
//         // stroing data in current chat firestore stroing data in current chat firestore stroing data in current chat firestore 
//         console.log('sent successfully');
//         setMsgInput('')
//     }


//     // sent msg function sent msg function sent msg function sent msg function sent msg function 





//     let [currentChat, setCurrentChat] = useState([]);

//     let currentUserChat = () => {
//         const collectionRef = collection(db, 'Users Information');
//         onSnapshot(collectionRef, (querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 let data = doc.data();
//                 if (uid == data.uid) {
//                     setCurrentChat([data])
//                     console.log('set hogaya');
//                 }
//             });
//         });
//     }




//     useEffect(() => {
//         currentUserChat()
//     }, [])

//     useEffect(() => {
//         currentUserChat()
//     }, [uid])

//     console.log(currentChat, "current chat");


//     //   getting data from user uid for chats 




//     return (
//         <>
//             <div className="main flex">

//                 <div className="w-full xl:w-[40%] lg:w-[40%] py-5 border-r h-[100vh] hidden md:hidden sm:hidden lg:block xl:block overflow-hidden">


//                     <div className="flex justify-between items-center">
//                         <h1 className="text-white px-3 text-2xl font-semibold">Chats</h1>
//                         <div className="flex justify-center items-center">
//                             <FaCirclePlus className="text-white text-3xl cursor-pointer" />
//                             {
//                                 userPorfile.profilePicture ? <img src={userPorfile.profilePicture} className="w-[30px] cursor-pointer rounded-full mx-3" onClick={handlePopUp} /> : <FaUserCircle onClick={handlePopUp} className="text-white text-3xl cursor-pointer" />
//                             }

//                             <LuLogOut className="text-white text-3xl mx-3 cursor-pointer" onClick={handleSignOut} />
//                         </div>
//                     </div>


//                     <div className="flex justify-center items-center">
//                         <input type="text" placeholder="Search......" className="w-[85%] mt-5 bg-transparent border-2 h-[35px] outline oultine-blue-600 border-blue-500 px-2 text-white" />
//                     </div>

//                     <div className="overflow-y-scroll h-[100%] custom-scrollbar">
//                         <div className="mt-4 overflow-hidden">
//                             {
//                                 allUsers.map((user, index) => (
//                                     <div className="border-b-[0.1rem] pb-5">
//                                         <Link to={`/chat/uid/${user.uid}/userName/:${user.username}/`} key={user.uid} className="border-b-[1px] pb-4">
//                                             <Chat userName={user.username} userProfile={user.profilePicture} uid={user.uid} />
//                                         </Link>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>


//                 <div className="xl:w-[60%] lg:w-[60%] md:w-[100%] sm:w-[100%] w-full h-[100vh] relative">
//                     {
//                         currentChat.map((user, index) => (
//                             <div className="top w-full border-b-[1px] flex justify-between items-center">
//                                 <div className="left flex justify-center items-center">
//                                     <Link to={'/'}>
//                                         <FaArrowCircleLeft className="text-white text-3xl mx-2" />
//                                     </Link>
//                                     <div className="flex justify-center items-center">
//                                         <Chat userName={user.username} userProfile={user.profilePicture} uid={user.uid} />
//                                     </div>
//                                 </div>
//                                 <div className="right flex">
//                                     <IoCallOutline className="text-white text-3xl mx-3 cursor-pointer" />
//                                     <MdOutlineVideoCall className="text-white text-3xl mx-3 cursor-pointer" />
//                                     <SlOptionsVertical className="text-white text-3xl mx-3 cursor-pointer" />
//                                 </div>
//                             </div>
//                         ))
//                     }

//                     {/* Center Area for Chat Messages */}
//                     <div className="center h-[calc(100vh-120px)] overflow-y-scroll p-4 custom-scrollbar">
//                         <div className="flex flex-col gap-4">

//                             {
//                                 userMsg.map((msg) => (
//                                     (msg.senderUid == uid || msg.recieverUid == uid) ? msg.senderUid == uid ? <div className="flex justify-end">
//                                         <div className="bg-gray-500 text-white p-3 rounded-lg max-w-[60%]">
//                                             {msg.message}
//                                         </div>
//                                     </div> : <div className="flex justify-start">
//                                         <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[60%]">
//                                             Hello, how are you?
//                                         </div>
//                                     </div> : ""

//                                 ))
//                             }


//                             {/* Add a div that acts as the bottom reference */}
//                             <div ref={chatEndRef}></div>
//                         </div>
//                     </div>


//                     {/* center area of chat  */}

//                     {/* Bottom Input Area */}
//                     <div className="bottom overflow-hidden flex justify-center items-center fixed bottom-0 right-0 lg:w-[60%] xl:w-[60%] w-[100%] h-[60px] bg-gray-800 p-2">
//                         <IoMdAttach className="text-white text-3xl mx-3 cursor-pointer" />
//                         <input
//                             type="text"
//                             placeholder="Type A Message....."
//                             className="bg-transparent text-xl resize-none placeholder:text-start placeholder:pt-3 placeholder:text-white placeholder:font-semibold border w-full h-[50px] outline-none text-white px-3"
//                             value={msgInput}
//                             onChange={(event) => setMsgInput(event.target.value)}
//                         />
//                         {
//                             msgInput ? <IoMdSend className="text-white text-3xl mx-3 cursor-pointer" onClick={sentMsg} /> :
//                                 <AiFillAudio className="text-white text-3xl mx-3 cursor-pointer" />
//                         }
//                     </div>
//                 </div>





//             </div>
//         </>
//     )
// }


// export default MediumChat;
