import { ChatList, ChatView } from "@/components";

const Chat = () => {
  return (
    <div className="w-full flex ">
        <div className="border-e-2 h-screen overflow-y-scroll bg-white border-r-2 w-4/12 md:w-5/12 lg:w-4/12">
          <ChatList />
        </div>
        <div className="w-full  h-[82vh] border-e-2">
          <ChatView />
        </div>
    </div>
  );
};

export default Chat;
