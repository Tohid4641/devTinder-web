import { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
    const { targetUserId } = useParams();
    const user = useSelector(store => store?.user)
    const userId = user?._id;

    const [sendMessage, setSendMessage] = useState("");
    const [receivedMessage, setReceivedMessage] = useState("");

    useEffect(() => {
        const socketClient = createSocketConnection();

        socketClient.emit("joinChat", { firstName: user?.firstName, userId, targetUserId })

        socketClient.on("receivedMessage", ({ firstName, message }) => {
            console.log(`${firstName}: ${message}`);
            setReceivedMessage(message);
        })

        return () => {
            socketClient.disconnect();
        }
    }, [userId, targetUserId]);

    if (!userId) return;

    const handleSendMessage = () => {
        if (sendMessage.trim() === "") return; // Prevent sending empty messages

        const socketClient = createSocketConnection();
        socketClient.emit("sendMessage", { firstName: user?.firstName, userId, targetUserId, message: sendMessage });

        // console.log(`You: ${sendMessage}`);

        setSendMessage(""); // Clear the input field after sending the message

    }


    return (
        <div className="container mx-auto h-screen max-w-2xl flex flex-col">
            {/* Header Section with User Info */}
            <div className="bg-base-200 p-4 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt="User avatar" src="https://t4.ftcdn.net/jpg/00/60/02/53/360_F_60025318_jeZht6tkRBhVLYuXNYZE9MPfLZYpWOF5.jpg" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Tauhid Shaikh</h3>
                        <span className="text-sm text-green-500">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Messages Section */}
            <div className="bg-base-300 p-4 h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/20 scrollbar-track-base-200">

                {/* logged in user message */}
                <div className="chat chat-end my-4">
                    <div className="chat-image avatar">
                        <div className="w-8 rounded-full">
                            <img alt="Your avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header mb-1">
                        You
                        <time className="text-xs opacity-50 ml-2">12:47</time>
                    </div>
                    <div className="chat-bubble chat-bubble-primary">
                        Have you checked out the new React updates?
                        <span className="ml-2 inline-flex">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Target user message */}
                <div className="chat chat-start my-4">
                    <div className="chat-image avatar">
                        <div className="w-8 rounded-full">
                            <img alt="Sender avatar" src="https://t4.ftcdn.net/jpg/00/60/02/53/360_F_60025318_jeZht6tkRBhVLYuXNYZE9MPfLZYpWOF5.jpg" />
                        </div>
                    </div>
                    <div className="chat-header mb-1">
                        Tauhid Shaikh
                        <time className="text-xs opacity-50 ml-2">12:48</time>
                    </div>
                    <div className="chat-bubble chat-bubble-neutral">
                        Yes! The new features are amazing! I'm especially excited about the server components.
                        <span className="ml-2 inline-flex">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </span>
                    </div>
                </div>



                {/* Typing Indicator */}
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-8 rounded-full">
                            <img alt="Sender avatar" src="https://t4.ftcdn.net/jpg/00/60/02/53/360_F_60025318_jeZht6tkRBhVLYuXNYZE9MPfLZYpWOF5.jpg" />
                        </div>
                    </div>
                    <div className="chat-bubble min-h-8 flex items-center gap-2">
                        <span className="loading loading-dots loading-sm"></span>
                        <span className="text-sm">Tauhid is typing</span>
                    </div>
                </div>
            </div>

            {/* Input Section */}
            <div className="bg-base-200 p-4 rounded-b-lg">
                <div className="join w-full">
                    <input
                        value={sendMessage}
                        onChange={(e) => setSendMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && setSendMessage("")}
                        type="text"
                        placeholder="Type a message..."
                        className="input input-bordered join-item w-full"
                    />
                    <button onClick={() => handleSendMessage()} className="btn btn-primary join-item">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;