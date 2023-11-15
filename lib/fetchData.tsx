export async function getData(){
    // console.log("hi")
    const res=await fetch('http://localhost:3000/api/project',{next:{revalidate:10}});
    let data=await res.json();
    return data;
   
    
}