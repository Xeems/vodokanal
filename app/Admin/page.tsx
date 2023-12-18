'use client'

import { redirect } from 'next/navigation'
import Image from 'next/image'
import Audministrator from '@/components/Administrator'
import { useSession } from 'next-auth/react'

export default function Admin() {
const {data: session} = useSession()
    if(!session?.user?.roles.includes("ADMIN"))
        redirect('/auth')
    return (
        <div className=''>
            <Audministrator/>
        </div>
    )
}