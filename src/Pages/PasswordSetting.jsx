import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function PasswordSetting() {
  const [password, setPassword] = useState({
    newpassword: "",
    conformpassword: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // console.log(password);

  const handleSatting = () => {
    const { newpassword, conformpassword } = password;
    if (!newpassword || !conformpassword) {
      toast.warning("不足しているフィールドを埋める");
    } else {
      if (newpassword === conformpassword) {
        toast.success("パスワード設定成功");
        localStorage.setItem('newpassword',conformpassword)
        setError(false);
        setLoading(true)
        setPassword( {newpassword: "",conformpassword: "",})
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      } else {
        toast.error("パスワード設定に失敗しました。もう一度お試しください。");
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-96 min-h-90 mt-35 ">
            <h1 className="text-center m-5 text-2xl font-bold">
              パスワード設定
            </h1>
            <div className="w-96 min-h-50 p-5">
              <p className="my-1">
                パスワードを入力後
                「設定ボタン」を押してサービスの利用を開始してください。
              </p>
              <lable>パスワード</lable>
              <br />
              {error ? (
                <input
                  type="password"
                  placeholder=""
                  className="input input-secondary border-red-700 border-2 mb-4 text-2xl font-bold"
                  onChange={(e) =>
                    setPassword({ ...password, newpassword: e.target.value })
                  }
                  value={password.newpassword}
                />
              ) : (
                <input
                  type="password"
                  placeholder=""
                  className="input input-warning border-black mb-4 text-2xl font-bold"
                  onChange={(e) =>
                    setPassword({ ...password, newpassword: e.target.value })
                  }
                  value={password.newpassword}
                />
              )}
              <br />
              <p className="my-2">
                半角大文字・小文字・数字を含めた8文字以上20文字以内
              </p>
              <lable>パスワード確認用</lable>
              <br />
              {error ? (
                <input
                  type="password"
                  placeholder=""
                  className="input input-secondary border-red-700 border-2 input-block  text-2xl font-bold"
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      conformpassword: e.target.value,
                    })
                  }
                  value={password.conformpassword}
                />
              ) : (
                <input
                  type="password"
                  placeholder=""
                  className="input input-warning input-block border-black text-2xl font-bold"
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      conformpassword: e.target.value,
                    })
                  }
                  value={password.conformpassword}
                />
              )}
              <button
                onClick={handleSatting}
                className="btn bg-orange-400 hover:bg-orange-300 w-80 mt-4 rounded-full text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "設定"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default PasswordSetting;
