import { GoDotFill } from "react-icons/go";

const ChatHeader = () => {
  return (
    <div className="fixed w-full h-[66px] flex items-center shadow-md bg-white z-50 -top-0 border-b-2">
      <div className="ms-6">
          <div className="flex gap-x-3">
            <img
              className="w-10 rounded-full border-gray-600 border"
              src={"/profile.png"}
              alt=""
            />
            <div>
              <h1 className="text-sm font-semibold text-gray-900">User</h1>
              <div className="flex">
                <h1 className="font-semibold text-gray-800 text-xs">
                  last seen 3:38 pm
                </h1>
                <span className={`text text-green-600 rounded-full`}>
                  <GoDotFill />
                </span>
              </div>
            </div>
          {/* </div> */}
         
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
