'use client'

import DropFiles from '@/components/dropfiles'
import { Document_data } from '@/types/globalTypes'
import { useState } from 'react'
import FileList from '@/components/FileList'

export default function Home() {
  const [data, setData] = useState<Document_data | null>(null)

  const handleData = (data: Document_data) => {
    setData(data)
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center p-24">

      <DropFiles onDataReceived={handleData} />

      <FileList></FileList>

    </div>
  )
}
