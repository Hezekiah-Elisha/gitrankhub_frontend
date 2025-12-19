import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'

export default function TopNav() {
    return (
        <nav className='p-4 flex flex-row justify-between items-center'>
            <h1 className='text-2xl font-bold font-sekuya font-poppins'>Gitrankhub</h1>
            <div className='flex flex-row items-center gap-4'>
                <ModeToggle />
                <Link href="/">
                    Home
                </Link>
                <Link href="/login">
                    login
                </Link>
                <Link href="/signup">
                    signup
                </Link>
            </div>
        </nav>
    )
}
