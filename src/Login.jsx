import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("tauhid@gmail.com");
  const [password, setPassword] = useState("Tauhid@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/api/auth/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      alert(res?.data?.message);
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center m-8">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center ">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
