
import DropFiles from '@/components/dropfiles'
import { Document_data } from '@/types/globalTypes'
import { useState } from 'react'
import FileList from '@/components/FileList'

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col gap-y-8 items-center justify-center p-24">

      <DropFiles/>

      <FileList></FileList>

    </div>
  )
}
