// No 'use client'
import { getData } from "@/lib/fetchData";
import DisplayClient from "./displayClient";

export default async function Display() {
  const data = await getData(); // SSR data fetching
//   console.log("hi");
  const reversedData = data?.reverse() || [];
    console.log(data);
  return <DisplayClient blogs={reversedData} />;
}