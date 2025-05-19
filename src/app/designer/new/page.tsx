'use client'

import React from 'react'
import { ReportDesigner, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createDesignerNewSession } from '../../../api'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../../constants'
import { customStyles } from '../../../themes/customTheme'

export default function DesignerNewPage() {
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createDesignerNewSession(APPLICATION, SCHEMA).then(setSession)
  }, [])

  return (
    <ReportDesigner
      session={session}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}
