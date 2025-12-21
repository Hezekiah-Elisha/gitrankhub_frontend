"use server";
import { cookies } from "next/headers";

export async function createCookie(key: string, value: string) {
  const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 day
  const cookieStore = await cookies();

  cookieStore.set({
    name: key,
    value: value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function getAllCookies() {
  const cookieStore = await cookies();
  return cookieStore.getAll();
}

export async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}

export async function deleteCookie(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}

// export async function deleteAllCookies() {
//   (await cookies()).clear();
// }

export async function deleteAllCookies() {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  for (const cookie of allCookies) {
    cookieStore.delete(cookie.name);
  }
}

export async function hasCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.has(key);
}
