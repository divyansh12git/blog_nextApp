export async function getData(){
    // console.log("hi")
    const res=await fetch('http://localhost:3000/api/project',{next:{revalidate:10}});
    // console.log(res);
    let data=await res.json();
    console.log("yup");
    console.log(data);
    return Array.isArray(data) ? data : []; ;
   
    
}