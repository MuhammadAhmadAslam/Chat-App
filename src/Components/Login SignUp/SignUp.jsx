import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { app } from "../Firebase/firebase";
import Swal from "sweetalert2";
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

                const storageRef = ref(storage, `profile-pictures/${user.uid}`);
                if (profilePicture) {    
                    const uploadTask = uploadBytesResumable(storageRef, profilePicture);
                    uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        

                    },
                    (error) => {
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
                            Swal.fire({
                                icon: "success",
                                title: "Your Account Has Been Created Explore Ahmed Whatsapp",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/login')
                        });
                    }
                );
            }else{
                const userRef = doc(db, 'Users Information', user.uid);
                setDoc(userRef, {
                    username,
                    email,
                    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U_ef87Q7CQ1Fx_khkPq-y9IfPmBWrMZ6ig&s",
                    uid: user.uid,
                });
                
                setUser(user);
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    title: "Your Account Has Been Created Explore Ahmed Whatsapp",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login')
            }
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == "auth/email-already-in-use") {
                    Swal.fire({
                        title: "Email Already In Use",
                        text: "Please Login You Will Be ReDirected To Login Page",
                        icon: "question"
                    });
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000);
                }
                
                if (errorCode == "auth/weak-password") {
                    Swal.fire({
                        title: "Weak Password",
                        text: "Please Make A Strong Password Password Should Be 7 Character Long Including Text Number Symbols",
                        icon: "error"
                    });
                }

                setEmail('')
                setPassword('')
                setUserName('')
                setProfilePicture(null)
                setLoading(false);
            });
    }

    return (
        <div className="flex min-h-[100vh] h-[100%] justify-center items-center">
            <div className="max-w-md w-full p-4 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-black">Sign Up</h1>
                <form>
                    <label className="block mb-3 text-black mt-4" htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 pl-10 text-sm text-black"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-black mt-4" htmlFor="username">
                        Username
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 pl-10 text-sm text-black"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-black mt-4" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 pl-10 text-sm text-black"
                            placeholder="Choose a password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <label className="block mb-3 text-black mt-4" htmlFor="profile-picture">
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
                            className="bg-zinc-900 hover:bg-zinc-950 mt-5 text-xl text-white font-bold py-2 px-4 rounded"
                            onClick={() => signUpUser()}
                            disabled={loading}
                        >
                            {
                                loading ? 'Creating Account....' : 'SignUp'
                            }
                        </button>
                    </div>
                    <Link to={'/login'} className="text-lg text-zinc-900 mt-4">
                        Already have an account? <span href="#" className="text-black hover:text-blue-700">Log In</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default SignUp;