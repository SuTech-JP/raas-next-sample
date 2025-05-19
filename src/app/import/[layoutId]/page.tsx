'use client'

import React from 'react'
import { DataTravelerImport, DataTravelerResult, MapperDef, Session } from '@sutech-jp/datatraveler-react-client'
import { useEffect, useState } from 'react'
import { MockCompany, MockPartner, createImportSession, loadMockCompany, loadMockPartners } from '../../../api'
import { useRouter, useParams } from 'next/navigation'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { customStyles } from '../../../themes/customTheme'

export default function ImportPage() {
  const params = useParams()
  const router = useRouter()
  const [, height] = useWindowSize()
  const [session, setSession] = useState<Session>()

  const [partners, setPartners] = useState<MockPartner[]>()
  const [company, setCompany] = useState<MockCompany>()

  useEffect(() => {
    createImportSession().then(setSession)
    loadMockPartners().then(setPartners)
    loadMockCompany().then(setCompany)
  }, [])

  const onImport = (result: DataTravelerResult) => {
    console.log(result)
    router.push(`/result/${result.dataImportLogId}`)
  }

  const onCancel = () => router.push('/import/gallery')

  if (!params.layoutId) return <></>
  if (!partners) return <div>Loading partners...</div>
  if (!company) return <div>Loading company...</div>
  
  return (
    <DataTravelerImport
      session={session}
      report={{ layoutId: Number(params.layoutId), application: APPLICATION, schema: SCHEMA, reportStep: 'preview' }}
      application={APPLICATION}
      schema={SCHEMA}
      mapper={{ sample_partners: partners }}
      binder={{ sample_company: company }}
      mapperDefs={[samplePartnersMapperDef]}
      binderDefs={[sampleCompanyMapperDef]}
      onImport={onImport}
      onCancel={onCancel}
      height={height - HEIGHT_OFFSET}
      customStyles={customStyles}
    />
  )
}

const sampleCompanyMapperDef: MapperDef = {
  name: 'sample_company',
  caption: '会社情報',
  values: [
    { path: 'code', caption: '会社コード' },
    { path: 'name', caption: '会社名' },
    { path: 'zipcode', caption: '郵便番号' },
    { path: 'address1', caption: '住所１' },
    { path: 'address2', caption: '住所２' },
    { path: 'address3', caption: '住所３' },
  ],
}

const samplePartnersMapperDef: MapperDef = {
  name: 'sample_partners',
  caption: '取引先情報',
  values: [
    { path: 'code', caption: '取引先コード' },
    { path: 'name', caption: '取引先名' },
    { path: 'zipcode', caption: '郵便番号' },
    { path: 'address1', caption: '住所１' },
    { path: 'address2', caption: '住所２' },
    { path: 'address3', caption: '住所３' },
  ],
}
