// import getStaticProps from "@/lib/getdata"
import Display from '@/app/components/posts'
// import NavBar from "./components/Nav_bar";
import { getData } from '@/lib/fetchData';

export default async function Home() {
  // let data:Array<Object>= await getData();
  
  // console.log(data[0]);
  
  
  return (
  <main>
      <h1 className="heading mt-20 ">Welcome to the Blog Website!!</h1>
      <Display />

  </main>
  )
}
