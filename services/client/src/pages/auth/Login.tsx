import { Link } from "react-router-dom";
import { Particle } from "@/components";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  return (
    <>
      <div className="h-[99vh] md:px-24 px-2">
        <Particle />
        <div className="text-white lg:block hidden font-bold absolute pt-10 md:left-[5%] left-[10%] md:text-3xl text-4xl">
          {/* <Logo /> */}
        </div>
        <div className="flex h-full items-center lg:justify-start justify-center gap-32">
          <div className="lg:flex hidden flex-col md:h-[74%] md:w-[40%] w-52">
            <div className="relative lg:flex md:h-[74%] md:w-full flex justify-center items-center">
              <div className="text-white font-bold text-4xl ">
                <Typewriter
                  words={["Chat, Connect, Create, Co-operate "]}
                  loop={100}
                  cursor
                  cursorStyle="..."
                  cursorColor="#5BBA0C"
                  typeSpeed={100}
                  deleteSpeed={0}
                  delaySpeed={3000}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="min-w-[400px] backdrop-blur-sm bg-opacity-15 bg-blue-gray-800 rounded-xl py-16 container mx-auto p-8 flex">
              <div className="w-1/2 mx-auto">
                <div className=" rounded-lg overflow-hidden shadow-2xl">
                  <div className="p-8">
                    <form onSubmit={(e) => e.preventDefault()} className="">
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium "
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="block w-full p-3 rounded  border border-transparent focus:outline-none"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium "
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="block w-full p-3 rounded  border border-transparent focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full p-3 mt-4 text-white bg-blue-950 border-2 border-white rounded shadow hover:bg-green-500"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                  <div className="flex justify-between p-8 text-sm border-t  ">
                    <Link className="font-bold" to={"/signup"}>Create account</Link>
                    <Link className="font-bold" to={"/forgot password"}>Forgot password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
