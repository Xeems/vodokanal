import ErorList from '@/components/ErrorList'
import MeterTable from '@/components/MeterTable'
import { Document_data, Error_row, Excel_document, Meter_readings } from '@/types/globalTypes'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Result({ searchParams }: {
    searchParams: {
        data: Document_data
    }
}) {

    const document: Excel_document = searchParams.data.document
    const meter_readings: Meter_readings[] = searchParams.data.meter_readings
    const erros: Error_row[] = searchParams.data.errors

    console.log(document)

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center p-24">

            <Image className='absolute z-0'
                src="/BackGroundWater.jpg"
                alt="Vercel Logo"
                fill
                priority
            />

            <div className='z-50 w-fit p-9 rounded-md border border-solid border-stone-500 backdrop-filter backdrop-blur-lg'>
                <h2 className='ml-10 font-bold text-3xl pb-5'>Данные</h2>
                <MeterTable />
                <h2 className='ml-10 font-bold text-3xl text-red-800 pt-5 pb-5'>Ошибки в документе</h2>
                <ErorList />
            </div>

        </main>
    )
}
