'use client'

import Link from 'next/link'
import { deleteTenant } from '../api'

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Next.js Raas(FE+BE) Sample</h1>
      <ul className="list-none p-0">
        <li className="my-2">
          <Link href="/import/gallery" className="text-blue-600 hover:underline">インポート(ギャラリー)</Link>
        </li>
        <li className="my-2">
          <Link href="/import/select" className="text-blue-600 hover:underline">インポート(Select)</Link>
        </li>
        <li className="my-2">
          <Link href="/designer/gallery" className="text-blue-600 hover:underline">レイアウト設定</Link>
        </li>
        <li className="my-2">
          <Link href="/organizer" className="text-blue-600 hover:underline">PDF分割</Link>
        </li>
        <li className="my-2">
          <Link href="/dictionary" className="text-blue-600 hover:underline">ユーザー辞書</Link>
        </li>
        <li className="my-2">
          <Link href="/logo" className="text-blue-600 hover:underline">ロゴ・社印</Link>
        </li>
        <li className="my-2">
          <button 
            onClick={deleteTenant}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            テナント削除
          </button>
        </li>
      </ul>
    </div>
  )
}
