// import React, { useState } from "react";
// import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { auth } from "../Firebase/firebase";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { doc, getFirestore, setDoc } from "firebase/firestore";
// import { app } from "../Firebase/firebase";
// import { getStorage } from "firebase/storage";
// function SignUp() {

//     const auth = getAuth();
//     const db = getFirestore(app);
//     const storage = getStorage(app);
//     let [email, setEmail] = useState('')
//     let [username, setUserName] = useState('')
//     let [password, setPassword] = useState('')
//     let [loading, setLoading] = useState(false)
//     let [user, setUser] = useState(null);
//     async function signUpUser() {
//         setLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log('user successfully signed up');

//                 const userRef = doc(db, 'users', user.uid);
//                 setDoc(userRef, {
//                     username,
//                     email,
//                     password,
//                     uid: user.uid
//                 });

//                 setUser(user);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 setLoading(false);
//             });
//     }



//     return (
//         <div className="flex min-h-[100vh] h-[100%] justify-center items-center">
//             <div className="max-w-md w-full p-4 rounded shadow-md">
//                 <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>
//                 <form>
//                     <label className="block mb-3 text-white mt-4" htmlFor="email">
//                         Email
//                     </label>
//                     <div className="relative">
//                         <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                             type="email"
//                             id="email"
//                             className="w-full p-2 pl-10 text-sm text-gray-700"
//                             placeholder="example@example.com"
//                             value={email}
//                             onChange={(event) => setEmail(event.target.value)}
//                         />
//                     </div>
//                     <label className="block mb-3 text-white mt-4" htmlFor="username">
//                         Username
//                     </label>
//                     <div className="relative">
//                         <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                             type="text"
//                             id="username"
//                             className="w-full p-2 pl-10 text-sm text-gray-700"
//                             placeholder="Choose a username"
//                             value={username}
//                             onChange={(event) => setUserName(event.target.value)}
//                         />
//                     </div>
//                     <label className="block mb-3 text-white mt-4" htmlFor="password">
//                         Password
//                     </label>
//                     <div className="relative">
//                         <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full p-2 pl-10 text-sm text-gray-700"
//                             placeholder="Choose a password"
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                         />
//                     </div>


//                     <div className="flex justify-center items-center mb-5 mt-5">
//                         <button
//                             type="button"
//                             className="bg-blue-500 hover:bg-blue-700 mt-5 text-xl text-white font-bold py-2 px-4 rounded"
//                             onClick={() => signUpUser()}
//                             disabled={loading}
//                         >
//                             {
//                                 loading ? 'Loading.......' : 'SignUp'
//                             }
//                         </button>
//                     </div>
//                     <Link to={'/login'} className="text-lg text-blue-300 mt-4">
//                         Already have an account? <span href="#" className="text-white hover:text-blue-700">Log In</span>
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;


import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getStorage} from "firebase/storage";
import { app } from "../Firebase/firebase";
function SignUp() {
    const auth = getAuth();
    const storage = getStorage();
    const db = getFirestore(app);
    let [email, setEmail] = useState('');
    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [loading, setLoading] = useState(false);
    let [user, setUser] = useState(null);
    let [profilePicture, setProfilePicture] = useState(null);
    let navigate = useNavigate()
    
    async function signUpUser() {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user successfully signed up');

                const storageRef = ref(storage, `profile-pictures/${user.uid}`);
                const uploadTask = uploadBytesResumable(storageRef, profilePicture);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        console.log('starting....');
                        
                    },
                    (error) => {
                        console.error(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            const userRef = doc(db, 'Users Information', user.uid);
                            setDoc(userRef, {
                                username,
                                email,
                                profilePicture: downloadURL,
                                uid: user.uid,
                            });

                            setUser(user);
                            setLoading(false);
                            navigate('/login')
                        });
                    }
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                setLoading(false);
            });
    }

    return (
        <div className="flex min-h-[100vh] h-[100%] justify-center items-center">
            <div className="max-w-md w-full p-4 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-white">Sign Up</h1>
                <form>
                    <label className="block mb-3 text-white mt-4" htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 pl-10 text-sm text-gray-700"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-white mt-4" htmlFor="username">
                        Username
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 pl-10 text-sm text-gray-700"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-white mt-4" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 pl-10 text-sm text-gray-700"
                            placeholder="Choose a password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-white mt-4" htmlFor="profile-picture">
                        Profile Picture
                    </label>
                    <div className="relative">
                        <input
                            type="file"
                            id="profile-picture"
                            className="w-full p-2 pl-10 text-sm text-black bg-white"
                            onChange={(event) => setProfilePicture(event.target.files[0])}
                            accept="image/*"
                        />
                    </div>
                    <div className="flex justify-center items-center mb-5 mt-5">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 mt-5 text-xl text-white font-bold py-2 px-4 rounded"
                            onClick={() => signUpUser()}
                            disabled={loading}
                        >
                            {
                                loading ? 'Loading.......' : 'SignUp'
                            }
                        </button>
                    </div>
                    <Link to={'/login'} className="text-lg text-blue-300 mt-4">
                        Already have an account? <span href="#" className="text-white hover:text-blue-700">Log In</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default SignUp;