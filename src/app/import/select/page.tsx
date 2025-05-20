'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RptLayout, getRaasLayouts } from '../../../api'
import { APPLICATION, SCHEMA } from '../../../constants'

export default function ImportSelectLayoutsPage() {
  const router = useRouter()
  const [layouts, setLayouts] = useState<RptLayout[]>([])

  useEffect(() => {
    getRaasLayouts(APPLICATION, SCHEMA).then(setLayouts)
  }, [])

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">インポート用レイアウト選択</h1>
      <ul className="list-none p-0">
        {layouts.map((layout) => (
          <li key={layout.id} className="my-2">
            <button
              onClick={() => router.push(`/import/${layout.id}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {layout.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
