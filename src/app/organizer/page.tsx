'use client'

import React from 'react'
import { ReportOrganizer, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createOrganizerSession } from '../../api'
import { ORGANIZER_APPLICATION, HEIGHT_OFFSET, ORGANIZER_SCHEMA } from '../../constants'
import { customStyles } from '../../themes/customTheme'

export default function OrganizerPage() {
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createOrganizerSession(ORGANIZER_APPLICATION, ORGANIZER_SCHEMA).then(setSession)
  }, [])

  return (
    <ReportOrganizer
      session={session}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}
