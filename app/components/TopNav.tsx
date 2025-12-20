"use client"
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TopNav() {
    const router = useRouter()
    const handleGithubLogin = () => {
        // loading from .env.local
        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
        const redirectUri = 'http://localhost:3000/authenticate';
        const scope = 'read:user';
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
        router.push(githubAuthUrl);
    };
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) return;

        // const target = `https://backend.com/external-signup?app=${appName}&accessToken=${code}&provider=github`;
        // callBackendAPI("GET", target);
    }, []);

    return (
        <nav className='p-4 flex flex-row justify-between items-center'>
            <Link href="/" className='text-2xl font-bold font-sekuya font-poppins'>Gitrankhub</Link>
            <div className='flex flex-row items-center gap-4'>
                <ModeToggle />
                <Link href="/">
                    Home
                </Link>
                <div className="flex flex-row items-center gap-4">
                    <Link href="/about">
                        About The Platform
                    </Link>
                    <Button variant={"outline"} className="flex flex-row items-center gap-2 text-primary hover:text-secondary hover:cursor-pointer" onClick={handleGithubLogin}>
                        <GithubIcon size={16} />
                        Sign in with GitHub
                    </Button>
                </div>
            </div>
        </nav>
    )
}
