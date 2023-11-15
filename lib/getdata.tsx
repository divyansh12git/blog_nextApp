export default async function getStaticProps() {
  
    const res = await fetch(`http://localhost:3000/api/project`,{next:{ revalidate: 10 }});
//    if(!res.ok){
//     throw new Error("failed to fetch");
//    }

    const posts = await res.json();
    console.log(posts)
    return posts
}