// import getStaticProps from "@/lib/getdata"
// import Display from '@/app/components/posts'
// import NavBar from "./components/Nav_bar";
import Display from './components/Display';
import { getData } from '@/lib/fetchData';
export const revalidate=5;
export default async function Home() {
  // let data:Array<Object>= await getData();
  
  // console.log(data[0]);
  
  
  return (
  <main className="" >
      <h1 className="heading  ">Welcome to the Blog Website!!</h1>
      
      <Display />

  </main>
  )
}
