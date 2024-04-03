// import { GoDotFill } from "react-icons/go";
// import { CgMoreVerticalR } from "react-icons/cg";

const ChatList = () => {
  return (
    <div className="relative ">
      <div className="fixed mt-0 z-50">
        <h1 className="text-2xl py-4 font-serif font-semibold ms-6">Inbox</h1>
        <div className="m-3">
          <input
            type="search"
            className="border mb-4 outline-none rounded-md p-3 w-full border-black"
            placeholder="Search"
          />
        </div>
      </div>
      {/* starting */}
      <div className="absolute top-32 w-full">
        <div
          key={1}
          className={`ms-4 gap-x-2 md:flex mt-7 cursor-pointer rounded-e-xl rounded-b-xl me-3 shadow -z-50 `}
        >
          <div className="py-2 ms-4">
            <img
              className="w-10 border hidden md:flex rounded-full h-10"
              src={"/profile.png"}
              alt=""
            />
          </div>
          <div className="md:flex gap-x-1 py-2 ">
            <div>
              <div className="w-full flex justify-between">
                <h1 className="text-sm font-semibold text-gray-900">
                  {"unknown"}
                </h1>
                {/* <span className={`text-xl rounded-full text-red-600'}`}>
                  <GoDotFill />
                </span> */}
                {/* <h1 className="text-xs font-semibold text-end poppins text-gray-700 mt-1 ">
                  371
                </h1> */}
              </div>
              <h1 className="text-xs mt-1 font-semibold  text-gray-700"></h1>
            </div>
          </div>
        </div>

        <div
          key={2}
          className={`ms-4 gap-x-2 md:flex mt-7 cursor-pointer rounded-e-xl rounded-b-xl me-3 shadow`}
        >
          <div className="py-2 ms-4">
            <img
              className="w-10 border hidden md:flex rounded-full h-10"
              src={"/profile.png"}
              alt=""
            />
          </div>
          <div className="md:flex gap-x-1 py-2 ">
            <div>
              <div className="w-full flex justify-between">
                <h1 className="text-sm font-semibold text-gray-900">
                  {"unknown"}
                </h1>
                {/* <span className={`text-xl rounded-full text-red-600'}`}>
                  <GoDotFill />
                </span> */}
                {/* <h1 className="text-xs font-semibold text-end poppins text-gray-700 mt-1 ">
                  371
                </h1> */}
              </div>
              <h1 className="text-xs mt-1 font-semibold  text-gray-700"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
