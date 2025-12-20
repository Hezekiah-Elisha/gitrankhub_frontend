"use client";

import { instance } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    console.log("Authorization code:", code);

    const {data, error, isLoading} = useQuery({
        queryKey: ["githubAuth", code],
        queryFn: async () => {
            if (!code) throw new Error("No code provided"); 
            const response = await instance.get(`/auth/github/callback?code=${code}`);
            console.log("Backend response:", response.data);
            return response.data;
        },
        enabled: !!code,
    });

  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {(error as Error).message}</p>}
        {data && <p>Authentication successful! Welcome, {data.username}.</p>}
    </div>
  )
}
