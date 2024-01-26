import Header from "../../components/header/Header";
import ListMessage from "../../components/message/ListMessage";
import Message from "../../components/message/Message";
import './chat.css';

function Chat(){
    return(
        <>
            <Header></Header>
            <div className="chat__body">
                <ListMessage className="chat__body__list"></ListMessage>
                <Message className="chat__body__message"></Message>  
            </div>
        </>
    );
}
export default Chat;