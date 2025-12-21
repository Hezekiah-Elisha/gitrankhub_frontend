"use server"
import { instance } from "@/api";

export async function githubCallback(code: string) {
    try {
        const response = await instance.get(`/auth/github/callback?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Error during GitHub callback:", error);
        throw error;
    }
}