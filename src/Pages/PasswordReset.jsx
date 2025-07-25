import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function PasswordReset() {
  const [email, setEmail] = useState("");
  // console.log(email);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleURL = () => {
    if (email == "") {
      toast.warning("不足しているフィールドを埋める");
    } else {
      const oldemail = localStorage.getItem("email");
      if (email.email == oldemail) {
        toast.success("URLを正常に送信しました");
        setError(false);
        setLoading(true);
        setEmail({ email: "" });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("無効な電子メールアドレス");
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-96 min-h-90 mt-35 ">
            <h1 className="text-center m-5 text-2xl font-bold ">
              パスワード再設定
            </h1>
            <p className="">
              現在使っているメールアドレスを入力してください。
              パスワード再設定用のURLをメールで送信いたします。
            </p>
            <div className="w-96 min-h-50 p-5">
              <lable>メールアドレス</lable>
              <br />
              {error ? (
                <input
                  type="text"
                  placeholder=""
                  className="input input-secondary border-red-700 border-2 mb-4"
                  onChange={(e) =>
                    setEmail({ ...email, email: e.target.value })
                  }
                  value={email.email}
                />
              ) : (
                <input
                  type="text"
                  placeholder=""
                  className="input input-warning border-black mb-4"
                  onChange={(e) =>
                    setEmail({ ...email, email: e.target.value })
                  }
                  value={email.email}
                />
              )}

              <button
                onClick={handleURL}
                className="btn bg-orange-400 hover:bg-orange-300 w-80 mt-4 rounded-full text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "パスワード再設定用URLを送信する"
                )}
              </button>
              <Link to={"/login"}>
                {" "}
                <p className="text-center m-4">ログイン画面にもどる</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default PasswordReset;
