import ChatHeader from "./ChatHeader";
import InputBar from "./InputBar";
import MessageContent from "./MessageContent";

const ChatView = () => {
  return (
    <div className="relative">
      {/* header */}
      <ChatHeader />
      {/* message content */}
      <MessageContent />
      {/* message writing or attaching bar */}
      <InputBar />
    </div>
  );
};

export default ChatView;
