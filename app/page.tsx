import { redirect } from 'next/navigation'

export default function page() {
    redirect('/main')
    return (
        <div>page</div>
    )
}
