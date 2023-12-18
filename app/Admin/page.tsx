'use client'

import Image from 'next/image'
import Audministrator from '@/components/Administrator'
import { useSession } from 'next-auth/react'

export default function Admin() {
const {data: session} = useSession()
    if(session?.user?.roles.includes("ADMIN"))

    return (
        <div className=''>
            <Audministrator/>
        </div>
    )
}