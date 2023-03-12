import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function App() {
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  return (
    <div className="bg-gray-10">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            LOGIN
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Name"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
               type={type}
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               autoComplete="current-password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />
             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute top-1/2 right-1/4 lg:right-1/3" icon={icon} size={25}/>
              </span>
          </div>

          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-600"
            >
              {" "}
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
