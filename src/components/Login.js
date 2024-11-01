import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome</h1>
        <input
          type="text"
          placeholder="Number"
          className="w-full p-2 mb-2 bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-700 rounded"
        />
        <button className="w-full bg-orange-500 p-2 rounded mb-2">Log In</button>
        <div className="text-center">OR</div>
        <button className="w-full bg-blue-500 p-2 rounded mt-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;