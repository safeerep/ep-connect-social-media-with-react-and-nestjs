import { ModeToggle } from "@/shadcn/ui/mode-toggle";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    console.log("rendered");
  }, []);
  return (
    <header
      className={`mx-auto sticky top-0 left-0 z-10 h-20 w-full overflow-hidden border-b-2 border-cyan-500 flex flex-col items-center justify-center`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <header
        className={`h-20 flex items-center justify-center  w-[90%] md:w-[85%] mx-auto`}
      >
        <div className="h-[90%] bg-transparent w-full  flex justify-between">
          <div className="flex items-center gap-20">
            <span className="text-4xl font-bold" >EP-CONNECT</span>
            <div className=" gap-10 hidden md:flex">{/*  */}</div>
          </div>
          <div className="flex items-center text-2xl gap-4 ">
            <div className="text-sm flex gap-10 items-center z-20">
              <Link to={"/login"} className={`font-semibold` }>
                login
              </Link>
              <Link to={"/register"} className={`font-semibold` }>
                register
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Navbar;
