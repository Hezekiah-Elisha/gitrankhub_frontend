"use server";

import { instance } from "@/api";

export async function getCurrentUser() {
  const res = await instance.get("https://api.github.com/user", {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
    },
  });
  return res.data;
}


export async function getUserFollowers(username: string) {
  const res = await instance.get(`https://api.github.com/users/${username}/followers`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
    },
  });
  return res.data;
}

export async function getUserRepos(username: string) {
  const res = await instance.get(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
    },
  });
  return res.data;
}