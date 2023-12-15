'use client'

import MeterTable from '@/components/MeterTable'
import ErrorList from '@/components/ErrorList'
import DropFiles from '@/components/dropfiles'
import { Document_data } from '@/utils/globalTypes'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data: session} = useSession()
  const [data, setData] = useState<Document_data | null>(null)

  console.log({session})

  const handleData = (data: Document_data) => {
    setData(data)
    console.log(data)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24">

      <DropFiles onDataReceived={handleData} />

      {data ?
        <div className='z-50 p-9 mt-5 w-1/2 flex flex-col gap-y-5 rounded-md border border-solid border-stone-500 backdrop-filter backdrop-blur-lg'>
          <MeterTable data={data.meter_readings}/>
          <ErrorList data={data.errors}/>
        </div>
        :
        <></>
      }

    </main>
  )
}
