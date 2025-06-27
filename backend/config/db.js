import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shreyagawade194:Shreya194@cluster0.7educdz.mongodb.net/foodel').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
//mongodb+srv://shreyagawade194:Shreya194@cluster0.7educdz.mongodb.net/?