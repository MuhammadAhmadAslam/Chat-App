import { onAuthStateChanged } from "firebase/auth";
import React, { useState , useEffect} from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase";


export let UserContext = createContext();

function UserContextProvider({ children }) {

    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {},
    });
    const [loading, setLoading] = useState(true);



    function onAuthChanged(user) {
        if (user) {
            setUser({
                isLogin: true,
                userInfo: {
                    uid : user?.uid,
                    email: user?.email,
                },
            });
        } else {
            setUser({ isLogin: false, userInfo: {} });
        }
        setLoading(false);
    }


    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber;
    }, []);



    return (


        <UserContext.Provider value={{ user, setUser }}>
            {loading ? (
                <div className="w-full h-[100vh] flex flex-col justify-evenly items-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/748/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" alt="" />
                    <div className="flex justify-center items-center flex-col">
                        <p>From</p>
                        <div className="border-b-[1px] w-[100px]"></div>
                        <h1 className="font-bold text-3xl">Ahmed</h1>
                    </div>
                </div>
            ) : (
                children
            )}
        </UserContext.Provider>
    )
}

export default UserContextProvider;