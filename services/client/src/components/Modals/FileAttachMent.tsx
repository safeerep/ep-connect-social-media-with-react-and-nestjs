import { CiImageOn } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoIosDocument } from "react-icons/io";

const FileAttachMent = ({ showMediaModal, setShowMediaModal }: { showMediaModal: boolean, setShowMediaModal: any }) => {
  return (
    <div
      className={`absolute duration-300 transition-all ease-in-out 
           ${showMediaModal ? "w-52 h-24" : "w-0 h-0"}
                 bottom-12 rounded-e-xl rounded-t-xl bg-lightgreen ms-6`}
    >
      {showMediaModal && (
        <>
          <div className="flex flex-wrap gap-x-5 absolute ms-4 rounded-sm mb-2 shadow-lg p-4">
            <div>
              <CiImageOn
                className="text-3xl cursor-pointer"
                onClick={() => {
                  
                }}
              />
              <label className="text-xs" htmlFor="">
                photos
              </label>
            </div>
            <div>
              <HiOutlineVideoCamera
                className="text-3xl cursor-pointer"
                onClick={() => {
                    setShowMediaModal(!showMediaModal)
                }}
              />
              <label className="text-xs" htmlFor="">
                video
              </label>
            </div>
            <div>
              <IoIosDocument
                className="text-3xl cursor-pointer"
                onClick={() => {
                  
                }}
              />
              <label className="text-xs" htmlFor="">
                Files
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FileAttachMent;
