export async function getData(){
    const res=await fetch('http://localhost:3000/api/project');

    const {data}=await res.json();
    
}