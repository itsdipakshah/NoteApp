import app from "./app.js"

app.listen(process.env.PORT,()=>{
   console.log(`Server is running in port:${process.env.PORT}`)
});
