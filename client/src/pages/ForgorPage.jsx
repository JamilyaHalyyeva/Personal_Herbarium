import { useState } from "react";
import COVER_LOGO from "../assets/test.png";
import COVER_VIDIOS from "../assets/forgot.mp4";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const ForgorPage = () => {
  const navigate = useNavigate();
  const [nameOrEmail, setNameEmail] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${baseUrl}/auth/forgotpassword`, {
      nameOrEmail,
    });

    console.log("response", response);
    if (response.data.success) {
      alert("Please check your email to reset your password");
    }
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex p-10  items-center justify-center">
      <div className="rounded-l-2xl relative flex flex-col justify-center w-2/5  h-[70rem]">
        <div className="absolute top-[20%] left-[10%] flex flex-col ">
          <h1 className="text-5xl text-white font-extrabold my-4">
            Create And Get Information <br /> About Your Favorite Flowers
          </h1>
          <p className="text-xl text-white font-normal">
            Adopt the peace of nature
          </p>
        </div>
        <video
          className="rounded-l-2xl w-auto  h-[70rem]  object-cover"
          autoPlay
          loop
          muted
        >
          <source src={COVER_VIDIOS} type="video/mp4" />
        </video>
      </div>

      <div className="rounded-r-2xl bg-[#E0E0E0] flex flex-col justify-center p-4  w-2/5   h-[70rem]">
        <div className=" flex justify-center items-center flex-col">
          <img src={COVER_LOGO} className="w-40 h-40 flex " />
          <h1 className=" font-extrabold text-3xl text-gray-500">
            Let Change Your Password
          </h1>
        </div>
        <form className="mt-8 space-y-8  w-4/5 pl-20 " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only ">
              Enter Your Email
            </label>
            <input
              id="name"
              name="name"
              type="email"
              autoComplete="name"
              required
              className="appearance-none rounded-xl min-h-12 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Enter Your Email"
              value={nameOrEmail}
              onChange={(e) => setNameEmail(e.target.value)}
            />
          </div>

          {/* <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-xl  min-h-12 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}
          {/* <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none  relative block w-full  min-h-12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4   text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sent a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgorPage;
