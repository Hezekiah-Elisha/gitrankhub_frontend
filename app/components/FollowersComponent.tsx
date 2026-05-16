import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FollowersComponent({ followers }: { followers: any[] }) {
    return (
        <>
            <h2 className='font-poppins text-2xl font-bold uppercase mt-10'>Followers({followers?.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                
                {followers?.map((follower: any) => (
                    <div key={follower.id} className='bg-secondary/50 rounded-2xl p-4 flex flex-col items-center gap-4'>
                        <Image src={follower.avatar_url} alt="Follower Avatar" width={500} height={500} className='rounded-full w-24' />
                        <p>{follower.login}</p>
                        <Link href={follower.html_url} target="_blank" className='text-sm text-primary hover:underline'>View Profile</Link>
                    </div>
                ))}
            </div>
        </>
    )
}
