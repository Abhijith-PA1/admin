import React from 'react'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <>
      <div className=' h-auto w-30 sm:w-50 py-4'>
        <button className="btn btn-outline text-gray-400 text-start hover:bg-yellow-200 hover:text-yellow-600 border-white btn-block"><i class="fa-solid fa-table fa-xl"></i>ダッシュボード</button>
        <Link to={'/registereduserlist'} className="btn btn-outline text-gray-400 text-start hover:bg-yellow-200 hover:text-yellow-600   border-white  btn-block"><i class="fa-regular fa-user fa-xl"></i>登録ユーザー</Link>
        <button className="btn btn-outline text-gray-400 text-start hover:bg-yellow-200 hover:text-yellow-600 border-white btn-block"><i class="fa-solid fa-gift fa-xl"></i>当選者</button>
        <button className="btn btn-outline text-gray-400 text-start hover:bg-yellow-200 hover:text-yellow-600   border-white  btn-block"><i class="fa-solid fa-user-tie fa-xl"></i>運営管理者</button>  
      </div>
    </>
  )
}

export default MenuBar
