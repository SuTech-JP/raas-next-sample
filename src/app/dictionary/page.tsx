'use client'

import React from 'react'
import { ReportTenantInfo, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createDictionarySession } from '../../api'
import { HEIGHT_OFFSET } from '../../constants'
import { customStyles } from '../../themes/customTheme'

export default function DictionaryPage() {
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createDictionarySession().then(setSession)
  }, [])

  return (
    <ReportTenantInfo
      session={session}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}
