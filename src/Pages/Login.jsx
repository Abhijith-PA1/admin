import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // console.log(userData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handLogin = () => {
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("不足しているフィールドを埋める");
    } else {
      if (password === localStorage.getItem("newpassword")) {
        toast.success("ログイン成功");
        localStorage.setItem("email", email);
        setError(false);
        setLoading(true);
        setUserData({ email: "", password: "" });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        toast.error(
          "お使いのアカウントは現在アクセスできません。ログインするには担当の管理者までお知らせください。"
        );
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-96 min-h-90 mt-35 ">
            <h1 className="text-center m-5 text-2xl font-bold">ログイン</h1>
            <div className="w-96 min-h-50 p-5">
              <lable>メールアドレス</lable>
              <br />
              {error ? (
                <input
                  type="email"
                  placeholder=""
                  className="input input-secondary border-red-700 border-2 mb-4"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  value={userData.email}
                />
              ) : (
                <input
                  type="email"
                  placeholder=""
                  className="input input-warning border-black mb-4"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  value={userData.email}
                />
              )}
              <br />
              <lable>パスワード</lable>
              <br />
              {error ? (
                <input
                  type="password"
                  placeholder=""
                  className="input input-secondary border-red-700 border-2  text-2xl font-bold"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  value={userData.password}
                />
              ) : (
                <input
                  type="password"
                  placeholder=""
                  className="input input-warning border-black text-2xl font-bold"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  value={userData.password}
                />
              )}
              <button
                onClick={handLogin}
                className="btn bg-orange-400 hover:bg-orange-300 w-80 mt-4 rounded-full text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "ログイン"
                )}
              </button>
              <Link to={"/passwordreset"}>
                {" "}
                <p className="text-center m-4">パスワードをお忘れの場合</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default Login;
