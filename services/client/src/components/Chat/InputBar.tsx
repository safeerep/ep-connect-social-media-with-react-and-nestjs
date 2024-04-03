import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { FaPaperclip } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import FileAttachMent from "../Modals/FileAttachMent";

const InputBar = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [showMediaModal, setShowMediaModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  return (
    <div className="fixed ms-10 bottom-3 w-2/3">
      <EmojiPicker
        className=" bottom-2 ms-[460px]"
        height={"410px"}
        lazyLoadEmojis
        width={"350px"}
        open={showEmoji}
        reactionsDefaultOpen={false}
        onEmojiClick={(data) => setMessage((prev: string) => prev + data.emoji)}
      />
      <form>
        <div className="flex gap-x-3">
          <FaPaperclip
            onClick={() => {
              console.log(`clicked`);

              setShowMediaModal(!showMediaModal);
            }}
            className="absolute left-2 bottom-2 text-gray-600 text-lg cursor-pointer"
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            className="text-sm bg-blue-50 py-2 w-full outline-none text-gray-600 px-8 border border-gray-400 rounded-xl"
            placeholder="Type Here..."
          />
          <CiMicrophoneOn
            onClick={() => setIsRecording(!isRecording)}
            //   onMouseDown={handleRecord} onMouseUp={stopRec} onMouseLeave={stopRec}
            className={`text-2xl ${isRecording ? "animate-bounce" : ""} 
                     cursor-pointer text-gray-700 absolute right-20 bottom-2`}
          />
          <MdOutlineEmojiEmotions
            onClick={() => setShowEmoji(!showEmoji)}
            className="text-2xl cursor-pointer text-gray-700 absolute right-28 bottom-2"
          />
          <button
            className={`bg-lightgreen cursor-pointer py-2 w-min rounded-lg disabled:opacity-70 disabled:cursor-not-allowed`}
            disabled={message === ""}
          >
            <FiSend className="text-xl text-black me-2" />
          </button>
        </div>
      </form>
      <FileAttachMent
        showMediaModal={showMediaModal}
        setShowMediaModal={setShowMediaModal}
      />
    </div>
  );
};

export default InputBar;
