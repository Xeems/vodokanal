import MeterTable from '@/components/MeterTable'
import UIbutton from '@/components/UIbutton'
import DropFiles from '@/components/dropfiles'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24">

      <Image className='absolute z-0'
        src="/BackGroundWater.jpg"
        alt="Vercel Logo"
        fill
        priority
      />

      <DropFiles />

    </main>
  )
}
