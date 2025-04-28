// const Chat = () => {
//     return (
//         <>
//             <div className="text-center flex flex-col justify-center">
//                 <div className="text-xl font-bold my-4">
//                     <div className="flex items-center gap-3">
//                         <div
//                             tabIndex={0}
//                             role="button"
//                             className="btn btn-ghost btn-circle avatar"
//                         >

//                             <div className="w-10 rounded-full">
//                                 <img alt="Tailwind CSS Navbar component" src="https://t4.ftcdn.net/jpg/00/60/02/53/360_F_60025318_jeZht6tkRBhVLYuXNYZE9MPfLZYpWOF5.jpg" />
//                             </div>
//                         </div>
//                         <h3>Tauhid Shaikh</h3>
//                     </div>


//                 </div>
//                 <div className="mx-auto overflow-x-auto w-full sm:w-1/2 bg-base-300">


//                     <div className="chat chat-start">
//                         <div className="chat-bubble chat-bubble-neutral">It's insulting!</div>
//                     </div>

//                     <div className="chat chat-end">
//                         <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Chat

const Chat = () => {
    return (
        <div className="container mx-auto h-screen max-w-2xl">
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
            <div className="bg-base-300 p-4 h-[calc(100vh-200px)] overflow-y-auto">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-neutral">
                        Hello! How are you?
                        <span className="ml-2 inline-flex">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-primary">
                        I'm doing great, thanks!
                        <span className="ml-2 inline-flex">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            <svg className="w-4 h-4 -ml-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </span>
                    </div>
                </div>
                {/* Typing Indicator */}
                <div className="chat chat-start">
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
                        type="text"
                        placeholder="Type a message..."
                        className="input input-bordered join-item w-full"
                    />
                    <button className="btn btn-primary join-item">
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