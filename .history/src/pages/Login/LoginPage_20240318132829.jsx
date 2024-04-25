import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "/src/features/auth/authSlice.js";
import "./Login.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { status, error } = useSelector((state) => state.login);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Email:
    //       <input type="text" name="email" value={credentials.email} onChange={handleChange} />
    //     </label>
    //     <label>
    //       Password:
    //       <input type="password" name="password" value={credentials.password} onChange={handleChange} />
    //     </label>
    //     <button type="submit">Log In</button>
    //   </form>
    //   {status === 'loading' && <p>Loading...</p>}
    //   {error && <p>{error.message}</p>}
    // </div>
    <div
      style={{
        /* Login Form */
        boxSizing: "border-box",
        position: "absolute",
        width: "864px",
        height: "800px",
        background: "#FFFFFF",
        border: "1px solid #000000",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          /* Left */

          /* Auto layout */
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          gap: "58px",
          position: "absolute",
          width: " 332px",
          height: "589.6px",
          filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "67.6px",
            backgroundImage: `url("/src/assets/logo-rikkei2 2.png")`, // Sử dụng backgroundImage thay vì background
            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          {/* Nội dung của bạn */}
        </div>
        <div
          style={{
            /* Welcome to RikkeiEdu LMS */
            width: "192px",
            height: "70px",
            fontFamily: "'Cabin'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#0A033C",
            /* Inside auto layout */
            flex: "none",
            order: "1",
            flexGrow: "0",
          }}
        >
          Welcome to RikkeiEdu LMS
        </div>
        <div
          style={{
            /* 5790719 1 */
            width: "332px",
            height: "336px",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            /* Inside auto layout */
            flex: "none",
            order: "2",
            flexGrow: "0",
          }}
        >
          <img
            src="/src/assets/5790719 1.png"
            style={{
              position: "absolute",
              left: "98.9%",
              right: "-97.02%",
              top: "1.81%",
              bottom: "2.09%",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          /* Form */
          position: "absolute",
          width: "311px",
          height: "331px",
        }}
      >
       
<div></div>

      </div>
    </div>
  );
}
export default LoginPage;
