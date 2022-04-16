const express = require ('express')
const path = require ('path')
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req,res) => {
    return res.sendFile(path.join(__dirname,'views','home.html'))
})


app.get("/register",(req,res) => {
    return res.sendFile(path.join(__dirname,'views','register.html'))
})

app.get("/login",(req,res) => {
    return res.sendFile(path.join(__dirname,'views','login.html'))
})

app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`))