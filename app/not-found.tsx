import { Undo } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen flex flex-col mx-auto items-center justify-center gap-2'>
            <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
            <p className='text-2xl font-bold'>The page you are looking for does not exist.</p>
            <Link href="/" className='underline flex flex-row items-center'>
                <Undo className='inline-block mr-2 h-6 w-6' />
                Go back home
            </Link>
        </div>
    )
}
