import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

function Login() {

      let [ email , setEmail ] = useState('')
      let [ password , setPassword] = useState('')
      let navigate = useNavigate()
      let handleSignIn = async (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      }

  return (
    <div className="flex min-h-[100vh] h-[100%] justify-center items-center">
      <div className="max-w-md w-full p-4 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-white">Sign In</h1>
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
          <div className="flex justify-center items-center mb-5 mt-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 mt-5 text-xl text-white font-bold py-2 px-4 rounded"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <Link to={'/signup'} className="text-lg text-blue-300 mt-4">
            Donot have an account? <a href="#" className="text-white hover:text-blue-700">SignUp</a>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;