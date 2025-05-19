'use client'

import React from 'react'
import { ReportDesigner, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createDesignerEditSession } from '../../../../api'
import { useParams } from 'next/navigation'
import { HEIGHT_OFFSET } from '../../../../constants'
import { customStyles } from '../../../../themes/customTheme'

export default function DesignerEditPage() {
  const params = useParams()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    if (params.layoutId) {
      createDesignerEditSession(params.layoutId as string).then(setSession)
    }
  }, [params.layoutId])

  if (!params.layoutId) return <div>Layout ID is required</div>
  
  return (
    <ReportDesigner
      session={session}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}
