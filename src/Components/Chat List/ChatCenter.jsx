import React from "react";
import { useEffect , useRef } from "react";
function ChatCenter(){

    const chatEndRef = useRef(null); 

 
    const scrollToBottom = () => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  

    useEffect(() => {
      scrollToBottom();
    }, []);


    return(
        <div className="center h-[calc(100vh-120px)] overflow-y-scroll p-4 custom-scrollbar">
        <div className="flex flex-col gap-4">

          {/* Example of User's Messages on the Left */}

          {/* <div className="flex justify-start">
            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[60%]">
              Hello, how are you?
            </div>
          </div> */}

          {/* Example of Sender's Messages on the Right */}
          {/* <div className="flex justify-end">
            <div className="bg-gray-500 text-white p-3 rounded-lg max-w-[60%]">
              I'm good, thank you! How about you?
            </div>
          </div> */}

          {/* Repeat message blocks for more messages */}
          {/* <div className="flex justify-end">
            <div className="bg-gray-500 text-white p-3 rounded-lg max-w-[60%]">
              More messages here...
            </div>
          </div> */}

          {/* Add a div that acts as the bottom reference */}
          <div ref={chatEndRef}></div>
        </div>
      </div>
    )
}

export default ChatCenter;