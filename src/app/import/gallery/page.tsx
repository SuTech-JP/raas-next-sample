'use client'

import React from 'react'
import { ReportLayoutGallery, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createGallerySession } from '../../../api'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../../constants'
import { useRouter } from 'next/navigation'
import { customStyles } from '../../../themes/customTheme'

export default function ImportGalleryPage() {
  const router = useRouter()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createGallerySession(APPLICATION, SCHEMA).then(setSession)
  }, [])

  const onSelectLayout = (layoutId: number | undefined) => {
    if (!layoutId) return
    router.push(`./${layoutId}`)
  }
  
  return (
    <ReportLayoutGallery
      session={session}
      onSelectLayout={onSelectLayout}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
      mode={'operation'}
    />
  )
}
