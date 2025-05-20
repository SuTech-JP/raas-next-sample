'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Result, getResult } from '../../../api'
import { useParams } from 'next/navigation'

export default function ResultPage() {
  const params = useParams()
  const [result, setResult] = useState<Result>()

  useEffect(() => {
    if (params.id) {
      getResult(params.id as string).then(setResult)
    }
  }, [params.id])

  if (!result) return <div className="p-5">Loading...</div>

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">結果</h1>
      <div className="mb-2">ID: {result.id}</div>
      <div className="mb-4">ステータス: {result.status}</div>
      <h2 className="text-xl font-bold mb-2">詳細</h2>
      <ul className="list-none p-0">
        {result.details.map((detail, index) => (
          <li key={index} className="mb-4 p-4 border border-gray-200 rounded">
            <div className="mb-2">データID: {detail.dataId}</div>
            <div>
              PDF:{' '}
              <a
                href={detail.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                表示
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
