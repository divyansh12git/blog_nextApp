// const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export async function getData(){
    // console.log("hi")
    if(process.env.NEXT_PUBLIC_BASE_URL==undefined) return [];
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`);
    // console.log(res);
    let data=await res.json();
    console.log("yup");
    console.log(data);
    return Array.isArray(data) ? data : []; ;
   
    
}