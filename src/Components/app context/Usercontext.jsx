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
                <div className="w-full h-96 flex justify-center items-center">
                    <h1>Loading....</h1>
                </div>
            ) : (
                children
            )}
        </UserContext.Provider>
    )
}

export default UserContextProvider;