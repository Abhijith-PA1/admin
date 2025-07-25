import React from "react";
import MenuBar from "../Components/MenuBar";
import RegisteredUserData from "../Data/RegisteredUserData.json";

function RegisteredUserList() {
  return (
    <>
      <div className="flex">
        <div>
          <MenuBar />
        </div>
        <div className="bg-slate-100 w-screen h-screen p-7">
          <div className="flex justify-between">
            <h1 className="font-bold">RegisteredUserList</h1>
            <div className="bg-white rounded-xl">
              <i className="fa-solid fa-magnifying-glass fa-xl m-2 "></i>
              <input
                type="text"
                placeholder="search by nickname/emailaddress"
                className="bg-white border-white w-70 input input-md rounded-xl"
              />
            </div>
          </div>
          <div>
            <table className="bg-white rounded-xl my-5 size-full">
              <thead>
                <tr>
                  <th className="p-3 text-gray-400">No.</th>
                  <th className="p-3 text-gray-400">Nick Name</th>
                  <th className="p-3 text-gray-400">email Address</th>
                  <th className="p-3 text-gray-400">Date of Birth</th>
                  <th className="p-3 text-gray-400">Gender</th>
                  <th className="p-3 text-gray-400">Placeof recedence</th>
                  <th className="p-3 text-gray-400">Regirestation date</th>
                </tr>
              </thead>
              <tbody>
                {RegisteredUserData.length > 0
                  ? RegisteredUserData.map((data) => (
                      <tr>
                        <td className="p-3 text-black">{data.no}</td>
                        <td className="p-3 text-black">{data.nickname}</td>
                        <td className="p-3 text-black">{data.email}</td>
                        <td className="p-3 text-black">{data.DoB}</td>
                        <td className="p-3 text-black">{data.gender}</td>
                        <td className="p-3 text-black">{data.PoR}</td>
                        <td className="p-3 text-black">{data.regdate}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            <div className="flex justify-between">
              <p>10 out of 5000 people said</p>
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">500</button>
                <button className="join-item btn">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisteredUserList;
