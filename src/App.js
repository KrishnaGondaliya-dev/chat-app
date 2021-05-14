import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

const App = () =>{
    if(!localStorage.getItem('username')) return < LoginForm/>
    return(
        <ChatEngine
            height = "100vh"
			projectID='3d80913d-4794-46b0-862a-55d8ee56141e'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
    )
}

export default App;