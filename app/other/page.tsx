"use client"
import { useQuery } from '@tanstack/react-query'
import { getCurrentUser, getUserFollowers, getUserRepos } from '../actions/user'
import Image from 'next/image'
import Link from 'next/link'
import FollowersComponent from '../components/FollowersComponent'

export default function OtherPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => {
            const res = await getCurrentUser()
            return res
        }
    })

    const { data: followers } = useQuery({
        queryKey: ["followers"],
        queryFn: async () => {
            if (!data) return []
            const res = await getUserFollowers(data.login)
            return res
        },
        enabled: !!data
    })

    const { data: repos } = useQuery({
        queryKey: ["repos"],
        queryFn: async () => {
            if (!data) return []
            const res = await getUserRepos(data.login)
            return res
        },
        enabled: !!data
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div className='container mx-auto'>
            <h1 className='font-poppins text-3xl font-bold uppercase'>This is the key with the owner</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 items-center w-full h-full'>
                <Image src={data.avatar_url} alt="User Avatar" width={1100} height={1400} className='rounded-full w-98' />
                <div className='bg-secondary w-full rounded-2xl max-w-xl p-10'>
                    <div>
                        <p className='text-xl'>{data.name}</p>
                        <p className='text-sm font-semibold'>{data.login}</p>
                    </div>
                </div>
            </div>
            <FollowersComponent followers={followers} />
            <h2 className='font-poppins text-2xl font-bold uppercase mt-10'>Repositories({repos?.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                {repos?.map((repo: any) => (
                    <div key={repo.id} className='bg-secondary rounded-2xl p-4 flex flex-col items-start gap-4 text-left'>
                        <p className='font-poppins font-bold'>{repo.name}</p>
                        <p className='text-sm'>{repo.description}</p>
                        <Link href={repo.html_url} target="_blank" className='text-sm text-primary hover:underline'>View Repository</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
