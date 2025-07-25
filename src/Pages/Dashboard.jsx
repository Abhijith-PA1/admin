import React from "react";
import Header from "../Components/Header";
import MenuBar from "../Components/MenuBar";
import Chart from "../Components/Chart"
import RegisteredUserData from "../Data/RegisteredUserData.json";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <div>
          <MenuBar />
        </div>
        <div className="bg-slate-100 w-screen h-auto p-7">
          <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-3 gap-6 grid-rows-3">
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
              <h3 className="m-4 font-bold">ユーザー登録数累計</h3>
              <div>
                <h1 className="p-3 text-xl font-bold">{RegisteredUserData.length}人</h1>
                <div className="flex justify-between px-3">
                  <p>400人(前月時点の累計)</p>
                  <p className="bg-green-300 rounded-lg">&uarr;12.5%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
              <h3 className="mx-4 mt-4 font-bold">アクティブユーザー</h3>
              <p className="mx-4">2024年2月1日-2024年2月5日</p>
              <div>
                <h1 className="p-3 text-xl font-bold">50人/今月</h1>
                <div className="flex justify-between px-3">
                  <p>12人(前月時点)</p>
                  <p className="bg-green-300 rounded-lg">&uarr;316,6</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
              <h3 className="mx-4 mt-4 font-bold">定着率</h3>
              <p className="mx-4">2024年1月1日-2024年1月31日</p>
              <div>
                <h1 className="p-3 text-xl font-bold">10%/前月</h1>
                <div className="flex justify-between px-3">
                  <p>12%(前々月)</p>
                  <p className="bg-red-300 rounded-lg">&darr;16.6%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
              <h3 className="mx-4 mt-4 font-bold">平均検索回数</h3>
              <p className="mx-4">2024年2月1日-2024年2月5日</p>
              <div>
                <h1 className="p-3 text-xl font-bold">4回/今月</h1>
                <div className="flex justify-between px-3">
                  <p>2回(前月の今日時点)</p>
                  <p className="bg-green-300 rounded-lg">&uarr;100%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[300px] col-span-0 row-span-0 sm:row-span-2 sm:col-span-2 sm:min-h-[50px] ">
              <Chart/>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
              <h3 className="mx-4 mt-4 font-bold">抽選利用回数</h3>
              <p className="mx-4">2024年2月1日-2024年2月5日</p>
              <div>
                <h1 className="p-3 text-xl font-bold">125回/今月</h1>
                <div className="flex justify-between px-3">
                  <p>85回(前月の今日時点)</p>
                  <p className="bg-green-300 rounded-lg">&uarr;47%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl min-h-[50px]">
             <h3 className="mx-4 mt-4 font-bold">アカウント削除数</h3>
              <p className="mx-4">2024年2月1日-2024年2月5日</p>
              <div>
                <h1 className="p-3 text-xl font-bold">10人/今月</h1>
                <div className="flex justify-between px-3">
                  <p>8人(前月の今日時点)</p>
                  <p className="bg-green-300 rounded-lg">&uarr;25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
