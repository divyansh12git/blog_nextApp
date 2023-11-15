import mongoose from "mongoose";

const Schema=mongoose.Schema;

let postSchema=new Schema({
    id:Number,
    User:String,
    Blog:String,
    date:String,
    title:String,
});

export const User= mongoose.models.Ice || mongoose.model("Ice",postSchema);

// const posts=new Post([
//     {
//     _id:1,
//     User:"Divyansh Gupta",
//     Blog:"assadsad",
//     date:"15/06/2023"
// },
//     {
//     _id:2,
//     User:"Saksham Singhal",
//     Blog:"assadsad",
//     date:"15/06/2023"
// },
//     {
//     _id:3,
//     User:"Shakti Prasanna",
//     Blog:"assadsad",
//     date:"15/06/2023"
// },
//     {
//     _id:4,
//     User:"Arin Josi",
//     Blog:"assadsad",
//     date:"15/06/2023"
// },
//     {
//     _id:5,
//     User:"Prakash Singh",
//     Blog:"assadsad",
//     date:"15/06/2023"
// },


// ]);


// Post.insertMany(posts).then(
//     ()=>{
//         console.log("Success");
//     }

// ).catch((err)=>{
//     console.log(err);
// })